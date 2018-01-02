<template>
  <div class="signup-form-wrapper">
    <!-- Step 1: Create Or Join Exists Team -->
    <div v-if="currentStep === 'JOIN_OR_CREATE'" class="signup-form-wrapper">
      <div>
        <button @click="onSelectJoinTeam">Join</button>
      </div>
      <div>
        or
      </div>
      <div>
        <button @click="onSelectCreateTeam">Create</button>
      </div>
      Your Team
    </div>
    <!-- Step 2-1 : Team Registration Form -->
    <div v-else-if="currentStep === 'JOIN_A_TEAM'" class="signup-form-wrapper">
      <h1>Find exists team</h1>
      <form v-if="signUpData.isTeamChecked" @submit.prevent="onSubmitTeamFind">
        Your team is <strong>{{ signUpData.team.name }}</strong>
        <fieldset>
          <div>
            <input type="text" placeholder="First Name">
            <input type="text" placeholder="Last Name">
          </div>
          <div>
            <input type="email" placeholder="Email">
          </div>
          <div>
            <input type="password" placeholder="Password">
          </div>
          <div>
            <input type="submit">
          </div>
        </fieldset>
      </form>
      <form ref="team-form" @submit.prevent="onSubmitTeamFind" v-else>
        <fieldset>
          <div>
            <input type="text" placeholder="Team Name" v-model="signUpData.team.name" minlength="3" maxlength="20">
            <input type="text" placeholder="Code" v-model="signUpData.team.inviteCode">
          </div>
          <div>
            <input type="submit">
          </div>
        </fieldset>
      </form>
      <div>
        <button @click="goTo('JOIN_OR_CREATE')">Back</button>
      </div>
    </div>
    <!-- Step 2-2 : Team Join Form -->
    <div v-else-if="currentStep === 'CREATE_A_TEAM'" class="signup-form-wrapper">
      <h1>Create a team</h1>
      <form v-if="signUpData.isTeamChecked" @submit.prevent="onSubmitUser">
        <div>
          Your team is <strong>{{ signUpData.team.name }}</strong>
        </div>
        <legend>User Info</legend>
        <fieldset>
          <div>
            <input type="text" placeholder="Real Name" v-model="signUpData.account.username">
          </div>
          <div>
            <input type="email" placeholder="Email" v-model="signUpData.account.email">
          </div>
          <div>
            <input type="password" placeholder="Password" v-model="signUpData.account.password">
          </div>
          <div>
            <input type="submit">
          </div>
        </fieldset>
      </form>
      <form ref="team-form" @submit.prevent="onSubmitTeamCreate" v-else>
        <legend>Team Info</legend>
        <fieldset>
          <div>
            <input type="text" placeholder="Team Name" v-model="signUpData.team.name" minlength="3" maxlength="20" required>
          </div>
          <div>
            <input type="submit">
          </div>
        </fieldset>
      </form>
      <div>
        <button @click="goTo('JOIN_OR_CREATE')">Back</button>
      </div>
    </div>
    <!-- Step 4 : Congrats! -->
    <div v-else>
      :)
    </div>
  </div>
</template>

<script>
const PAGE_TYPE = {
  JOIN_OR_CREATE: 'JOIN_OR_CREATE',
  JOIN_A_TEAM: 'JOIN_A_TEAM',
  CREATE_A_TEAM: 'CREATE_A_TEAM',
  CREATE_USER: 'CREATE_USER',
  DONE: 'DONE'
}

export default {
  data () {
    return {
      currentStep: PAGE_TYPE.JOIN_OR_CREATE,
      signUpData: {
        isJoinExsistsTeam: false,
        isTeamChecked: false,
        team: {
          name: '',
          inviteCode: ''
        },
        account: {
          username: '',
          email: '',
          password: ''
        }
      }
    }
  },
  methods: {
    onSelectJoinTeam () {
      this.signUpData.isJoinExsistsTeam = true
      this.goTo(PAGE_TYPE.JOIN_A_TEAM)
    },
    onSelectCreateTeam () {
      this.signUpData.isJoinExsistsTeam = false
      this.goTo(PAGE_TYPE.CREATE_A_TEAM)
    },
    onSubmitTeamFind () {
      this.signUpData.isTeamChecked = true
    },
    onSubmitTeamCreate () {
      this.signUpData.team = {
        name: this.signUpData.team.name
      }
      this.signUpData.isTeamChecked = true
    },
    async onSubmitUser () {
      console.log(this.signUpData)
      try {
        const { data: signUpData } = await this.$http({
          headers: { 'Access-Control-Allow-Origin': '*' },
          method: 'POST',
          url: '/api/register',
          data: { ...this.signUpData.account }
        })
        console.log('signup result = > ', signUpData._id)
        const teamResult = await this.$http({
          headers: { 'Access-Control-Allow-Origin': '*' },
          method: 'POST',
          url: '/api/api/teams',
          data: {
            id: signUpData._id,
            name: this.signUpData.team.name
          }
        })
        console.log('teamResult => ', teamResult)
        this.goTo(PAGE_TYPE.DONE)
      } catch (error) {
        console.log(error)
      }
    },
    goTo (nextStep) {
      if (nextStep === PAGE_TYPE.JOIN_OR_CREATE) {
        this.signUpData = {
          isJoinExsistsTeam: false,
          isTeamChecked: false,
          team: {
            name: '',
            inviteCode: ''
          }
        }
      }
      this.currentStep = nextStep
    }
  }
}
</script>

<style>
.signup-form-wrapper {
  width: 90%;
}
</style>
