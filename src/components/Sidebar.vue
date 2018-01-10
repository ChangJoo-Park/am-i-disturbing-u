<template>
  <div class="sidebar-wrapper">
    <div class="sidebar-boxes" v-if="currentUser" >
      <badge-box title='My Badges' :actions="myBadgeActions" :badges="userBadges">
        <text-picker
          v-if="currnetOpenedPicker === pickers['user-text-badge']"
          @onCancelClicked="currnetOpenedPicker = null"
          @onSaveClicked="onSaveClicked"
        />
      </badge-box>
      <badge-box title='Team Badges' :badges="teamBadges"/>
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
import TextPicker from '@/components/TextPicker'
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    user: {
      type: Object
    }
  },
  components: {
    BadgeBox,
    StatusBox,
    AccountBox,
    TextPicker
  },
  computed: {
    ...mapGetters(['currentUser', 'loadedTeam']),
    userBadges () {
      if (!this.currentUser.badges) {
        return []
      }
      return this.currentUser.badges
    },
    teamBadges () {
      if (!this.currentUser.team) {
        return []
      }
      return this.currentUser.team.badges
    }
  },
  data () {
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
      myBadgeActions,
      currnetOpenedPicker: null,
      pickers: {
        'user-text-badge': 'USER_TEXT_BADGE',
        'user-emoji-badge': 'USER_EMOJI_BADGE'
      }
    }
  },
  mounted () {
    this.$bus.$on('on-badge-clicked', this.onBadgeClicked)
  },
  methods: {
    ...mapActions(['removeBadge']),
    // Methods for My Badges
    openEmojiModal () {
      window.alert('Emoji Modal')
    },
    async openTextModal () {
      if (this.currnetOpenedPicker) {
        this.currnetOpenedPicker = null
        return
      }
      this.currnetOpenedPicker = this.pickers['user-text-badge']
    },
    async onSaveClicked ({ text, colorSet }) {
      const Cookie = require('js-cookie')

      const result = await this.$http({
        method: 'POST',
        url: '/api/badges',
        headers: {authorization: Cookie.get('token')},
        data: {
          type: 'text',
          owner: 'member',
          body: text,
          textColor: colorSet.color,
          bgColor: colorSet.bgColor
        }
      })
      this.currnetOpenedPicker = null
      console.log('result => ', result)
    },
    // Methods for Team Badge
    // SignOut
    async onClickSignOut () {
      const isSignOut = window.confirm('로그아웃 하시겠습니까?')
      if (isSignOut) {
        this.$router.replace({name: 'login-page'})
      }
    },
    async onBadgeClicked (badge) {
      const isMine = badge.creator === this.currentUser._id && badge.owner === 'member'
      if (isMine) {
        console.log('삭제할 수 있음')
        await this.removeBadge(badge)
      }
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
