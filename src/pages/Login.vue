<template>
  <div id="login-page">
    <!-- <div v-if="currentUser">
      {{ currentUser }}
      <div>
        <button @click="onClickGoToApp">Go to App</button>
      </div>
      <div>
        <button @click="onClickSignOut">SignOut</button>
      </div>
    </div> -->
    <login-form @on-submit="onSubmitSignIn" />
    <button @click="goToSignUp">Sign Up</button>
  </div>
</template>

<script>
import Cookie from 'js-cookie'
import LoginForm from '@/components/auth/LoginForm'

export default {
  components: {
    LoginForm
  },
  data () {
    return {
      user: null
    }
  },
  methods: {
    onClickGoToApp () {
      this.$router.push({ name: 'main-page' })
    },
    async onSubmitSignIn (user) {
      try {
        const userInfo = Object.assign({}, user)
        const { data: loginResult } = await this.$http({
          method: 'POST',
          url: '/api/login',
          data: {
            ...userInfo
          }
        })
        console.log(loginResult)
        // set cookie
        Cookie.set('token', loginResult.token, { expires: 7 })
        this.$router.push({ name: 'main-page' })
        // const userData = await this.$http({
        //   method: 'GET',
        //   url: '/api/me',
        //   headers: { 'authorization': Cookie.get('token') }
        // })
      } catch (error) {
        console.log(error)
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
