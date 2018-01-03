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
      if (this.badge.hasOwnProperty('color')) {
        return {
          backgroundColor: this.badge.backgroundColor,
          color: this.badge.color
        }
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
