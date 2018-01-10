<template>
  <div class="badge text-badge-wrapper" v-if="badge" :style="badgeStyles" @click="onBadgeClicked(badge)">
    <span class="text-badge">
      {{ badge.body }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    badge: {
      type: Object,
      required: true,
      validator: (value) => {
        return value.type === 'text'
      }
    }
  },
  computed: {
    badgeStyles: function () {
       // TODO: Validator로 변경해야함
      if (this.badge.hasOwnProperty('textColor') && this.badge.hasOwnProperty('bgColor')) {
        const { bgColor: backgroundColor, textColor: color } = this.badge
        return { backgroundColor, color }
      }
      return {
        backgroundColor: '#ddd',
        color: '#fff'
      }
    }
  },
  methods: {
    onBadgeClicked () {
      this.$bus.$emit('on-badge-clicked', this.badge)
    }
  }
}
</script>

<style>
.text-badge-wrapper {
  display: inline-block;
  border-radius: 5px;
  padding: 3px 5px;
  font-size: 12px;
  margin-right: 5px;
  margin-bottom: 5px;
  cursor: pointer;
  user-select: none;
}
</style>
