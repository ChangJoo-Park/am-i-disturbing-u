<template>
  <i class="material-icons" :class="iconClass" :style="iconStyle">{{ name }}</i>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    size: {
      type: String,
      default: 'normal',
      required: false,
      validator (value) {
        return ['small', 'normal', 'large'].includes(value)
      }
    },
    color: {
      type: String,
      default: '#fff'
    },
    backgroundColor: {
      type: String,
      default: '#333'
    }
  },
  computed: {
    iconClass () {
      return `material-icons-${this.size}`
    },
    iconStyle () {
      return { backgroundColor: this.backgroundColor, color: this.color }
    }
  }
}
</script>

<style>
.material-icons {
  border-radius: 100%;
}
.material-icons-normal {
  font-size: 15px;
}

.material-icons-small {
  font-size: 13px;
}

.material-icons-large {
  font-size: 18px;
}
</style>
