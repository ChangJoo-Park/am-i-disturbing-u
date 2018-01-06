<template>
  <div>
    <member-row v-for="(member, index) in members" :key="index" :member="member" />
  </div>
</template>

<script>
import MemberRow from '@/components/MemberRow'
import { mapGetters } from 'vuex'

export default {
  components: {
    MemberRow
  },
  computed: {
    ...mapGetters(['currentUser']),
    members () {
      if (!this.currentUser || !this.currentUser.team || !this.currentUser.team.members) {
        return []
      }
      return this.currentUser.team.members
    }
  }
}
</script>

<style>

</style>
