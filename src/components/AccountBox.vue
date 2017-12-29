<template>
  <form-box title="Account" :actions="actions">
    <div class="account-wrapper">
      <avatar />
      <div class="account-info">
        <strong>ChangJoo Park</strong>
      </div>
    </div>
  </form-box>
</template>

<script>
import FormBoxLayout from '../layouts/FormBox'
import Avatar from '../components/Avatar'

export default {
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
            window.alert('hello')
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
