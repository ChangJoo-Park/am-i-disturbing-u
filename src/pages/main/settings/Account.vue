<template>
  <div>
    <form @submit.prevent="onSubmitAccount">
      <fieldset>
        <legend>Account Profile</legend>
        <div>
          <label>Email
            {{ currentUser.email }}
          </label>
        </div>
        <div>
          <label>Username
            <input type="text" v-model="userName">
          </label>
        </div>
        <div>
          <label>Title
            <input type="text" v-model="userTitle">
          </label>
        </div>
      </fieldset>
      <fieldset>
        <legend>Time</legend>
        <div>
          <input type="text" placeholder="TimeZone">
        </div>
      </fieldset>
      <input type="submit" value="Save">
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      userTitle: '',
      userName: '',
      userTimeZone: ''
    }
  },
  computed: {
    ...mapGetters(['currentUser'])
  },
  watch: {
    'currentUser.username' (val) {
      this.userName = val
    },
    'currentUser.title' (val) {
      this.userTitle = val
    },
    'currentUser.timezone' (val) {
      this.userTimeZone = val
    }
  },
  mounted () {
    if (this.currentUser) {
      this.userName = this.currentUser.username
      this.userTitle = this.currentUser.title
      this.userTimeZone = this.currentUser.timezone
    }
  },
  methods: {
    ...mapActions(['updateStatus']),
    onSubmitAccount () {
      console.log('account submit')
      console.log(this.userName, this.userTitle)
      this.updateStatus({
        username: this.userName,
        title: this.userTitle
      })
    }
  }
}
</script>

<style>

</style>
