<template>
  <div id="login-page">
    <div v-if="currentUser">
      {{ currentUser }}
      <div>
        <button @click="onClickGoToApp">Go to App</button>
      </div>
      <div>
        <button @click="onClickSignOut">SignOut</button>
      </div>
    </div>
    <login-form v-else @on-submit="onSubmitSignIn" />
    <button @click="goToSignUp">Sign Up</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { auth } from 'firebase'
import LoginForm from '@/components/auth/LoginForm'

export default {
  beforeRouteEnter (to, from, next) {
    auth().onAuthStateChanged(user => {
      next(vm => {
        if (user) {
          vm.setCurrentUser(user)
        } else {
          vm.removeUser()
        }
      })
    })
  },
  components: {
    LoginForm
  },
  data () {
    return {
      user: null
    }
  },
  computed: {
    ...mapGetters(['currentUser'])
  },
  methods: {
    ...mapActions(['removeUser', 'setUser']),
    async onSubmitSignIn (newUser) {
      try {
        const { email, password } = newUser
        await auth().setPersistence(auth.Auth.Persistence.SESSION)
        const { displayName, isAnnonymous } = await auth().signInWithEmailAndPassword(email, password)
        this.setCurrentUser({ displayName, email, isAnnonymous })
      } catch (error) {
        console.error(error)
      }
    },
    async setCurrentUser ({ displayName = '', email, isAnnonymous }) {
      await this.setUser({ displayName, email, isAnnonymous })
    },
    onClickGoToApp () {
      this.$router.push({ name: 'main-page' })
    },
    async onClickSignOut () {
      const isSignOut = window.confirm('로그아웃 하시겠습니까?')
      if (isSignOut) {
        await auth().signOut()
        this.removeUser()
      }
    },
    goToSignUp () {
      this.$router.push({ name: 'signup-page' })
    }
  }
}
</script>

<style>

</style>
