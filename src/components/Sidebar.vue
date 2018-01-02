<template>
  <div class="sidebar-wrapper">
    <div class="sidebar-boxes" v-if="currentUser" >
      <badge-box title='My Badges' :badges="currentUser.badges"/>
      <badge-box title='Team Badges' :badges="loadedTeam.badges"/>
      <!-- Status -->
      <status-box :user="currentUser" />
      <!-- Account Box -->
      <account-box :user="currentUser" />
    </div>
    <div class="sidebar-logout">
      <button class="sidebar-logout-button" @click="onClickSignOut">Logout</button>
    </div>
  </div>
</template>

<script>
import BadgeBox from '@/components/BadgeBox'
import StatusBox from '@/components/StatusBox'
import AccountBox from '@/components/AccountBox'
import { mapGetters } from 'vuex'

export default {
  props: {
    user: {
      type: Object
    }
  },
  components: {
    BadgeBox,
    StatusBox,
    AccountBox
  },
  computed: {
    ...mapGetters(['currentUser', 'loadedTeam'])
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
      myBadges: [],
      newBadge: '',
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
    },
    // Methods for Team Badge
    // SignOut
    async onClickSignOut () {
      const isSignOut = window.confirm('로그아웃 하시겠습니까?')
      if (isSignOut) {
        this.$router.replace({ name: 'login-page' })
      }
    },
    async onNewBadgeCreated () {
    }
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
  margin-bottom: 5px;
}
.sidebar-logout-button {
  width: 100%;
}
</style>
