<template>
  <div class="member-row" v-if="member">
    <div class="member-avatar-wrapper">
      <avatar :img="member.email" />
    </div>
    <div class="member-info-wrapper">
      <div class="member-info">
        <span class="member-info-name">{{ member.username }}</span>
        <icon name="home" color="#2c3e50" backgroundColor= "#fff" v-if="member.isRemote"/>
        <icon name="volume_off" color="#c0392b" backgroundColor= "#fff" v-if="member.isDoNotDisturb"/>
        <span class="member-next member-next-in" v-if="member.nextIn">{{ member.nextIn }}</span>
        <span class="member-next member-next-out" v-if="member.nextOut">{{ member.nextOut }}</span>
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
import Icon from '@/components/Icon'
import BadgeRow from '@/components/BadgeRow'

export default {
  props: {
    member: {
      type: Object
    }
  },
  components: {
    Avatar,
    Icon,
    BadgeRow
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

.member-info {
  display: flex;
  align-items: center;
  flex: 0;
  min-height: 30px;
}

.member-info-name {
  font-weight: bold;
  margin-right: 5px;
}

.member-next {
  font-size: 14px;
  margin-right: 5px;
}
</style>
