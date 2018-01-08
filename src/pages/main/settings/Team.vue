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
          <input type="email" placeholder="Email" v-model="newInvitation.email">
          <input type="text" placeholder="UserName" v-model="newInvitation.username">
          <div>
            <input type="submit">
          </div>
        </div>
      </fieldset>
    </form>
    <ul>
      <li v-for="invitation in invitations" :key="invitation._id">
        <div>
          {{ invitation.username }} - {{ invitation.email }}
          <button @click="deleteInvitation(invitation)">x</button>
        </div>
        <div>
          {{ invitation.code }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      teamName: '',
      teamBadges: [],
      newInvitation: {
        email: '',
        username: ''
      },
      invitations: []
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
  async mounted () {
    if (this.currentUser) {
      this.teamName = this.currentUser.team.name
    }

    const { data: invitationsData } = await this.getInvitations()
    this.invitations = invitationsData
  },
  methods: {
    ...mapActions(['updateTeamInfomation', 'getInvitations', 'createInvitation']),
    onSubmitTeam () {
      console.log('team submit')
      this.updateTeamInfomation({
        name: this.teamName
      })
    },
    onSubmitTeamBadges () {
      console.log('team badge submitted')
    },
    async onSubmitTeamInvitation () {
      const { data: newInvitation } = await this.createInvitation({
        email: this.newInvitation.email,
        username: this.newInvitation.username
      })
      this.invitations.push(newInvitation)
    },
    async deleteInvitation (invitation) {
      console.log('invitation => ', invitation)
    }
  }
}
</script>

<style>

</style>
