<template>
  <div class="badge-box">
    <header class="badge-box-header">
      <div class="badge-box-title">
        {{ title }}
      </div>
      <div class="badge-box-actions">
        <button
          v-for="(action, index) in actions"
          :key="index"
          @click="action.onClick"
          class="badge-box-action"
        >
          {{ action.name }}
        </button>
      </div>
    </header>
    <main class="badge-box-main">
      <badge-row :badges="badges"/>
    </main>
  </div>
</template>

<script>
import BadgeRow from './BadgeRow.vue'

export default {
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    actions: {
      type: Array,
      required: false,
      default: () => []
    },
    badges: {
      type: Array,
      requied: false,
      default: () => []
    }
  },
  components: {
    BadgeRow
  }
}
</script>

<style lang="scss">
.badge-box {
  width: 100%;
  min-width: 250px;
  min-height: 100px;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  .badge-box-header {
    border-bottom: 1px solid black;
    padding: 10px;
    flex: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .badge-box-main {
    flex: 1;
    padding: 10px;
  }
}
.badge-box-header {
  .badge-box-title {
    font-weight: bold;
  }
  .badge-box-actions {
    .badge-box-action:first-child {
      margin-right: 5px;
    }
  }
}
</style>
