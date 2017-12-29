<template>
  <emoji
    class="emoji-badge"
    :emoji="badge.body"
    set="apple"
    :size="24"/>
</template>

<script>
import { Emoji } from 'emoji-mart-vue'

export default {
  props: {
    badge: {
      type: Object,
      required: true
    }
  },
  components: {
    Emoji
  }
}
</script>

<style>
.emoji-badge {
  cursor: pointer;
  user-select: none;
  margin-right: 5px;
  margin-bottom: 5px;
}
</style>
