<template>
  <div id="signup-page" class="signup-page">
    <div class="signup-info">hello world</div>
    <sign-up-form class="signup-form"/>
  </div>
</template>

<script>
import SignUpForm from '@/components/auth/SignUpForm'

export default {
  components: {
    SignUpForm
  }
}
</script>

<style lang="scss">
#signup-page {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
}
.signup-info {
  background-color: #3498db;
  flex: 1;
  width: 50%;
  padding: 10px;
}
.signup-form {
  flex: 1;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
