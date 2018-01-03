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
export default {
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
  methods: {
    setUser (user) {
      this.user = user
    },
    async onSubmitSignUp () {
    },
    async onSubmitSignIn () {
    },
    async onSignOut () {
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
