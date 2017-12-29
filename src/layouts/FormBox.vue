<template>
  <div class="form-box">
    <header class="form-box-header">
      <div class="form-box-title">
        {{ title }}
      </div>
      <div class="form-box-actions">
        <button
          v-for="(action, index) in actions"
          :key="index"
          @click="action.onClick"
          class="form-box-action"
        >
          {{ action.name }}
        </button>
      </div>
    </header>
    <main class="form-box-main">
      <slot />
    </main>
  </div>
</template>

<script>
export default {
  name: 'form-box',
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
    }
  }
}
</script>

<style lang="scss">
.form-box {
  width: 100%;
  min-width: 250px;
  min-height: 100px;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  .form-box-header {
    border-bottom: 1px solid black;
    padding: 10px;
    flex: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .form-box-main {
    flex: 1;
    padding: 10px;
  }
}
.form-box-header {
  .form-box-title {
    font-weight: bold;
  }
  .form-box-actions {
    .form-box-action:first-child {
      margin-right: 5px;
    }
  }
}
</style>
