<template>
  <div>
    <div>
      <h1>Text, Emoji Badge</h1>
      <div style="display: flex; flex-direction: row;">
        <badge :badge="text" />
        <badge :badge="secondText" />
        <badge :badge="emoji"/>

        <emoji-badge :badge="emoji"/>
        <text-badge :badge="text"/>
        <text-badge :badge="secondText"/>
      </div>
    </div>
  </div>
</template>

<script>
import Badge from '../src/components/Badge/index.js'
import TextBadge from '../src/components/Badge/TextBadge.vue'
import EmojiBadge from '../src/components/Badge/EmojiBadge.vue'

export default {
  components: {
    TextBadge,
    EmojiBadge,
    Badge
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
      },
      emoji: {
        body: ':santa:',
        type: 'emoji'
      }
    }
  }
}
</script>

<style>

</style>
