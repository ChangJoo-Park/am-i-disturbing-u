<template>
  <div id="admin-page">
    <h1>This is Admin Page!</h1>
    <div v-if="user">
      <button @click="onSignOut">Sign Out</button>
    </div>
    <div v-else>
      <form @submit.prevent="onSubmitSignUp">
        <fieldset>
          <legend>Sign Up</legend>
          <input type="email" v-model="newUser.email" required>
          <input type="password" v-model="newUser.password" required>
          <input type="submit">
        </fieldset>
      </form>
      <form @submit.prevent="onSubmitSignIn">
        <fieldset>
          <legend>Sign In</legend>
          <input type="email" v-model="newUser.email" required>
          <input type="password" v-model="newUser.password" required>
          <input type="submit">
        </fieldset>
      </form>
    </div>

    <div>
      {{ error }}
    </div>
    <div class="data-wrapper">
      {{ teams }}
    </div>
    <div class="data-wrapper">
      {{ users }}
    </div>
    <div class="data-wrapper">
      {{ badges }}
    </div>
    <div class="data-wrapper">
      {{ pings }}
    </div>
    <div class="data-wrapper">
      {{ logs }}
    </div>
  </div>
</template>

<script>
import { auth } from 'firebase'
import { teamsRef, usersRef, badgesRef, pingsRef, logsRef } from '../firebase'

export default {
  firebase: {
    teams: teamsRef,
    users: usersRef,
    badges: badgesRef,
    pings: pingsRef,
    logs: logsRef
  },
  data: function () {
    return {
      newUser: {
        email: '',
        password: ''
      },
      error: '',
      user: null
    }
  },
  async created () {
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user
      } else {
        this.user = null
      }
    })
  },
  async beforeRouteEnter (to, from, next) {
    try {
      auth().onAuthStateChanged((user) => {
        if (user) {
          next(vm => vm.setUser(user))
        } else {
          next({
            name: 'login-page'
          })
        }
      })
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    setUser (user) {
      this.user = user
    },
    async onSubmitSignUp () {
      const { email, password } = this.newUser
      try {
        await auth().createUserWithEmailAndPassword(email, password)
        this.newUser.email = ''
        this.newUser.password = ''
      } catch (error) {
        this.error = error.message
        setTimeout(() => {
          this.error = ''
        }, 2000)
      }
    },
    async onSubmitSignIn () {
      const { email, password } = this.newUser
      try {
        await auth().setPersistence(auth.Auth.Persistence.SESSION)
        await auth().signInWithEmailAndPassword(email, password)
      } catch (error) {
        this.error = error.message
        setTimeout(() => {
          this.error = ''
        }, 2000)
      }
    },
    async onSignOut () {
      const isSignOut = window.confirm('로그아웃 하시겠습니까?')
      if (isSignOut) {
        await auth().signOut()
      }
    }
  }
}
</script>

<style>
#admin-page {
  padding: 10px;
  width: 100%;
  height: 100%;
  overflow: auto;
}
.data-wrapper {
  border: 1px solid black;
  min-height: 400px;
  overflow: hidden;
  margin-bottom: 10px;
}
</style>
