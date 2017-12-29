<template>
  <form-box title='Status'>
    <ul class="status-list">
      <li class="status-item">
        <span class="status-item-label">Next In</span>
        <div>O</div>
      </li>
      <li class="status-item">
        <span class="status-item-label">Next Out</span>
        <div>O</div>
      </li>
      <li class="status-item">
        <span class="status-item-label">Remote</span>
        <div>O</div>
      </li>
      <li class="status-item">
        <span class="status-item-label">Do not disturb</span>
        <div>O</div>
      </li>
    </ul>
  </form-box>
</template>

<script>
import FormBoxLayout from '../layouts/FormBox'
import BadgeRow from './BadgeRow.vue'

export default {
  components: {
    'form-box': FormBoxLayout,
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
