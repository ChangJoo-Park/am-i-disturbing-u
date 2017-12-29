<template>
  <div>
    <badge-box title='My Badges' :actions="myBadgeActions"/>
    <badge-box title='Team Badges' />
  </div>
</template>

<script>
import BadgeBox from '@/components/BadgeBox'

export default {
  components: {
    BadgeBox
  },
  data: function () {
    const myBadgeActions = [
      {
        name: 'emoji',
        onClick: this.openEmojiModal
      },
      {
        name: 'text',
        onClick: this.openTextModal
      }
    ]
    return {
      myBadgeActions
    }
  },
  methods: {
    // Methods for My Badges
    openEmojiModal: function () {
      window.alert('Emoji Modal')
    },
    openTextModal: function () {
      window.alert('Text Modal')
    }
    // Methods for Team Badge
  }
}
</script>

<style>
</style>
