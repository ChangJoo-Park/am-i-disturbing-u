<template>
  <div class="sidebar-wrapper">
    <div class="sidebar-boxes">
      <badge-box title='My Badges' :actions="myBadgeActions"/>
      <badge-box title='Team Badges' />
      <!-- Status -->
      <status-box />
      <!-- Account Box -->
      <account-box />
    </div>
    <div class="sidebar-logout">
      <button class="sidebar-logout-button">Logout</button>
    </div>
  </div>
</template>

<script>
import BadgeBox from '@/components/BadgeBox'
import StatusBox from '@/components/StatusBox'
import AccountBox from '@/components/AccountBox'

export default {
  components: {
    BadgeBox,
    StatusBox,
    AccountBox
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

<style lang="scss">
.sidebar-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  overflow: auto;
}

.sidebar-boxes {
  flex: 1;
}
.sidebar-logout {
  flex: 0;
}
.sidebar-logout-button {
  width: 100%;
}
</style>
