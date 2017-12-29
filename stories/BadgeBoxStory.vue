<template>
  <div>
    <div>
      <h1>Badge Box with title</h1>
      <badge-box title="My Badges" />
    </div>
    <div>
      <h1>Badge Box with title and actions</h1>
      <badge-box
        title="My Badges"
        :actions="actions"
      />
    </div>
    <div>
      <h1>Badge Box with badges</h1>
      <badge-box
        title="My Badges"
        :actions="actions"
        :badges="badges"
      />
    </div>
  </div>
</template>

<script>
import BadgeBox from '../src/components/BadgeBox.vue'

export default {
  components: {
    BadgeBox
  },
  data: function () {
    return {
      actions: [
        {
          name: 'Emoji',
          onClick: () => {
            console.log(this)
          }
        },
        {
          name: 'Text',
          onClick: () => {
            console.log(this)
          }
        }
      ],
      badges: [
        {
          body: 'Hello World',
          type: 'text',
          backgroundColor: '#ddd',
          color: '#fff'
        },
        {
        body: 'Hello World',
        type: 'text',
        backgroundColor: '#ddd',
        color: '#fff'
        },
        {
        body: 'Hello World',
        type: 'text',
        backgroundColor: '#3498db',
        color: '#000'
        },
        {
        body: ':santa:',
        type: 'emoji'
        }
      ]
    }
  }
}
</script>

<style>

</style>
