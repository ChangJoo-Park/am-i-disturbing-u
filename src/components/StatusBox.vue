<template>
  <form-box title='Status'>
    <ul class="status-list">
      <li class="status-item">
        <span class="status-item-label">Next In</span>
        <div>{{ user.nextIn }}</div>
      </li>
      <li class="status-item">
        <span class="status-item-label">Next Out</span>
        <div>{{ user.nextOut }}</div>
      </li>
      <li class="status-item">
        <span class="status-item-label">Remote</span>
        <div>{{ user.isRemote }}</div>
      </li>
      <li class="status-item">
        <span class="status-item-label">Do not disturb</span>
        <div>{{ user.isDoNotDisturb }}</div>
      </li>
    </ul>
  </form-box>
</template>

<script>
import FormBoxLayout from '../layouts/FormBox'

export default {
  props: {
    user: {
      type: Object
    }
  },
  components: {
    'form-box': FormBoxLayout
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
