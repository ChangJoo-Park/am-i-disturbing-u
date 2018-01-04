<template>
  <div class="toggle-switch" :class="{ 'toggle-switch-on': isOn }" @click="onClickSwitch">
    <div class="toggle-switch-radio toggle-switch-radio-on" v-if="isOn"></div>
    <div class="toggle-switch-radio" v-else></div>
  </div>
</template>

<script>
export default {
  props: {
    'is-on': {
      type: Boolean,
      required: true,
      default: false
    }
  },
  methods: {
    onClickSwitch () {
      this.$emit('changed')
    }
  }
}
</script>

<style lang="scss">
.toggle-switch {
  cursor: pointer;
  border: 1px solid black;
  width: 50px;
  height: 25px;
  position: relative;
  margin: 5px;
  border-radius: 25px;
  transition: all 0.2s;
  background-color: #fff;

  &.toggle-switch-on {
    border: 1px solid #2980b9;
    background-color: #2980b9;
  }
}

.toggle-switch-radio {
  width: 50%;
  height: 100%;
  border-radius: 50%;
  background-color: #000;
  transition: all 0.2s;
}

.toggle-switch-radio-on {
  transform: translateX(100%);
  background-color: #fff;
}
</style>
