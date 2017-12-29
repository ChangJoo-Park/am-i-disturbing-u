<template>
  <div class="badge-row" :class="{ 'badge-row-sidescroll': sidescroll }">
    <badge v-for="(badge, index) in badges" :key="index" :badge="badge"/>
  </div>
</template>

<script>
import Badge from './Badge/index.js'

export default {
  props: {
    badges: {
      type: Array,
      default: () => []
    },
    sidescroll: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Badge
  }
}
</script>

<style lang="scss">
.badge-row {
  display: flex;
  flex-direction: row;
  max-width: 100%;
  flex-wrap: wrap;
  align-content: center;
}

.badge-row-sidescroll {
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
}
</style>
