<template>
  <div>
    <div>
      <h1>Text Badge</h1>
      <text-badge :badge="text"/>
      <text-badge :badge="secondText"/>
    </div>
  </div>
</template>

<script>
import TextBadge from '../src/components/Badge/TextBadge.vue'

export default {
  components: {
    TextBadge
  },
  data: function () {
    return {
      text: {
        body: 'Hello World',
        type: 'text',
        backgroundColor: '#ddd',
        color: '#fff'
      },
      secondText: {
        body: 'Hello World',
        type: 'text',
        backgroundColor: '#3498db',
        color: '#000'
      }
    }
  }
}
</script>

<style>

</style>
