<template>
  <form-box title='Status'>
    <ul class="status-list">
      <li class="status-item" @click="onClickNextIn">
        <span class="status-item-label">Next In</span>
        <div>{{ user.nextIn }}</div>
      </li>
      <li class="status-item" @click="onClickNextOut">
        <span class="status-item-label">Next Out</span>
        <div>{{ user.nextOut }}</div>
      </li>
      <li class="status-item">
        <span class="status-item-label">Remote</span>
        <toggle-switch :is-on="user.isRemote" @changed="onClickRemote"/>
      </li>
      <li class="status-item">
        <span class="status-item-label">Do not disturb</span>
        <toggle-switch :is-on="user.isDoNotDisturb" @changed="onClickDoNotDisturb"/>
      </li>
    </ul>
  </form-box>
</template>

<script>
import FormBoxLayout from '../layouts/FormBox'
import ToggleSwitch from '@/components/ToggleSwitch'
import { mapActions } from 'vuex'

export default {
  props: {
    user: {
      type: Object
    }
  },
  components: {
    'form-box': FormBoxLayout,
    ToggleSwitch
  },
  methods: {
    ...mapActions(['updateRemote', 'updateDisturb']),
    onClickNextIn () {
      window.alert('onClickNextIn')
    },
    onClickNextOut () {
      window.alert('onClickNextOut')
    },
    onClickRemote () {
      this.updateRemote(!this.user.isRemote)
    },
    onClickDoNotDisturb () {
      this.updateDisturb(!this.user.isDoNotDisturb)
    }
  }
}
</script>

<style lang="scss">
.status-list {
  list-style: none;
  margin: 0;
  padding: 0;

  .status-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px 10px;
    border-bottom: 1px solid black;
  }
}
</style>
