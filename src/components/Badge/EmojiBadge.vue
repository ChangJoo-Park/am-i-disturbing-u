<template>
  <emoji
    class="badge emoji-badge"
    :emoji="badge.body"
    set="apple"
    :backgroundImageFn="backgroundImageFn"
    :size="24"/>
</template>

<script>
import { Emoji } from 'emoji-mart-vue'
import { canUseWebP } from '../../utils'

export default {
  props: {
    badge: {
      type: Object,
      required: true
    }
  },
  data: function () {
    return {
      backgroundImageFn: _ => {
        return canUseWebP() ? '/static/emoji-sheet.webp' : '/static/emoji-sheet-min.png'
      }
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
