<template>
  <form-box title="Account" :actions="actions" v-if="user">
    <div class="account-wrapper">
      <avatar :img="user.email" />
      <div class="account-info">
        <strong>{{ user.username }}</strong>
        <span>{{ user.title }}</span>
      </div>
    </div>
  </form-box>
</template>

<script>
import FormBoxLayout from '../layouts/FormBox'
import Avatar from '../components/Avatar'

export default {
  props: {
    user: {
      type: Object
    }
  },
  components: {
    'form-box': FormBoxLayout,
    Avatar
  },
  data: function () {
    return {
      actions: [
        {
          name: 'Edit',
          onClick: () => {
            this.$router.push({
              name: 'setting-page'
            })
          }
        }
      ]
    }
  }
}
</script>

<style>
.account-wrapper {
  display: flex;
  align-items: center;
}
.account-info {
  margin-left: 10px;
}
</style>
