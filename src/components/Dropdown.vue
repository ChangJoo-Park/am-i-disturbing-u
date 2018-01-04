<template>
  <div class="dropdown" v-on-clickaway="away">
    <slot />
  </div>
</template>

<script>
import { directive as onClickaway } from 'vue-clickaway'

export default {
  directives: {
    onClickaway
  },
  methods: {
    away () {
      console.log('click away')
      this.$emit('away')
    }
  }
}
</script>

<style>
.dropdown {
  position: absolute;
  width: 200px;
  min-height: 40px;
  max-height: 300px;
  background-color: #fff;
  overflow-x: hidden;
  overflow-y: auto;
  top: 0;
  right: 0;
  z-index: 5;
  border: 1px solid black;
  padding: 5px;
}
</style>
