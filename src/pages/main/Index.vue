<template>
  <div>
    <member-row v-for="(member, index) in teamMembers" :key="index" :member="member" />
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
    ...mapGetters(['teamMembers'])
  }
}
</script>

<style>

</style>
