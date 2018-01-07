<template>
  <div>
    <form @submit.prevent="onSubmitTeam">
      <fieldset>
        <legend>Team Profile</legend>
        <div>
          <input type="text" placeholder="Team Name" v-model="teamName">
        </div>
        <input type="submit" value="Save">
      </fieldset>
    </form>
    <form @submit.prevent="onSubmitTeam">
      <fieldset>
        <legend>Team Badges</legend>
        <div>
          {{ badges }}
        </div>
        <input type="submit" value="Save">
      </fieldset>
    </form>
    <form @submit.prevent="onSubmitTeamInvitation">
      <fieldset>
        <legend>Invitations</legend>
        <div>
          <input type="email" placeholder="Email">
          <input type="text" placeholder="UserName">
          <div>
            <input type="submit">
          </div>
        </div>
        <ul>
          <li>
            <strong>EMAIL - USERNAME - CREATED AT</strong>
            <div>
              asdasdfasdfasdf.asdfasdfsdf.sdfasfsdfasdf
            </div>
          </li>
        </ul>
      </fieldset>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      teamName: '',
      teamBadges: []
    }
  },
  computed: {
    ...mapGetters(['currentUser']),
    badges () {
      return this.currentUser ? this.currentUser.team.badges : []
    }
  },
  watch: {
    'currentUser.team.name' (val) {
      this.teamName = val
    }
  },
  mounted () {
    if (this.currentUser) {
      this.teamName = this.currentUser.team.name
    }
  },
  methods: {
    ...mapActions(['updateTeamInfomation']),
    onSubmitTeam () {
      console.log('team submit')
      this.updateTeamInfomation({
        name: this.teamName
      })
    },
    onSubmitTeamBadges () {
      console.log('team badge submitted')
    },
    onSubmitTeamInvitation () {
      console.log('Team Invitation')
    }
  }
}
</script>

<style>

</style>
