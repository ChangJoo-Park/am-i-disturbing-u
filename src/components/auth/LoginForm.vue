<template>
  <div>
    <h1>This is Login Page!</h1>
    <div>{{ error }}</div>
    <form @submit.prevent="$emit('on-submit', newUser)" style="display: flex;">
      <fieldset>
        <legend>Sign In</legend>
        <div>
          <label for="email">Email</label>
          <input id="email" type="email" autofocus v-model="newUser.email">
        </div>
        <div>
          <label for="password">Password</label>
          <input id="password" type="password" v-model="newUser.password">
        </div>
        <div>
          <input type="submit">
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newUser: {
        email: '',
        password: ''
      },
      error: null
    }
  }
}
</script>

<style>

</style>
