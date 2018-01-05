<template>
  <div class="member-row" v-if="member">
    <div class="member-avatar-wrapper">
      <avatar :img="member.email" />
    </div>
    <div class="member-info-wrapper">
      <div class="member-info">
        <div>{{ member.username }} <span v-if="member.isRemote">REMOTE</span><span v-if="member.isDoNotDisturb">Do Not Disturb</span></div>
        <div>{{ member.nextIn }} {{ member.nextOut }}</div>
        <div>{{ member.title }}</div>
      </div>
      <badge-row :badges="member.badges" />
    </div>
    <div class="member-row-action">
      <button>Ping</button>
    </div>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar'
import BadgeRow from '@/components/BadgeRow'

export default {
  props: {
    member: {
      type: Object
    }
  },
  components: {
    Avatar,
    BadgeRow
  },
  data () {
    return {
      badges: [
        {
          body: 'Hello World',
          type: 'text'
        },
        {
          body: 'Hello World',
          type: 'text'
        },
        {
          body: 'Hello World',
          type: 'text'
        },
        {
          body: 'Hello World',
          type: 'text'
        },
        {
          body: 'Hello World',
          type: 'text'
        }
      ]
    }
  }
}
</script>

<style>
.member-row {
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 10px;
}
.member-avatar-wrapper {
  flex: 0;
  margin-right: 10px;
}
.member-info-wrapper {
  flex: 1;
  margin-right: 10px;
}
.member-row-action {
  flex: 0;
}
</style>
