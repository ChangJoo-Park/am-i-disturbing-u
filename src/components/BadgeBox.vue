<template>
  <form-box :title="title" :actions="actions" class="badge-box">
    <div class="badge-box-picker">
      <slot />
    </div>
    <badge-row :badges="badges"/>
  </form-box>
</template>

<script>
import FormBoxLayout from '../layouts/FormBox.vue'
import BadgeRow from './BadgeRow.vue'

export default {
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    actions: {
      type: Array,
      required: false,
      default: () => []
    },
    badges: {
      type: Array,
      requied: false,
      default: () => []
    }
  },
  components: {
    'form-box': FormBoxLayout,
    BadgeRow
  }
}
</script>

<style lang="scss">
.badge-box {
  position: relative;
}

.badge-box-picker {
}
</style>
