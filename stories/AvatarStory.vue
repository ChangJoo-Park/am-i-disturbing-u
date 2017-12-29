<template>
  <div>
    <div>
      <h1>Default Avatar</h1>
      <avatar />
    </div>
    <div>
      <h1>Small, Large Avatar</h1>
      <avatar size="small" />
      <avatar size="large" />
    </div>

    <div>
      <h1>Avatar with image</h1>
      <avatar img="http://lorempicsum.com/futurama/300/300/2" />
      <avatar img="http://lorempicsum.com/futurama/300/300/2" size="small" />
      <avatar img="http://lorempicsum.com/futurama/300/300/2" size="large" />
    </div>
  </div>
</template>

<script>
import Avatar from '../src/components/Avatar.vue'

export default {
  components: {
    Avatar
  }
}
</script>

<style>

</style>
