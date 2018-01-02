<template>
  <layout v-if="loadedTeam">
    <navigation slot="navigation" />
    <sidebar
      slot="sidebar"
      :user="user"
    />
    <div>
      {{ loadedTeam.name }}
      <member-row v-for="(member, index) in teamMembers" :key="index" :member="member" />
    </div>
  </layout>
</template>

<script>
import MasterDetailLayout from '@/layouts/MasterDetail'
import Sidebar from '@/components/Sidebar'
import Navigation from '@/components/Navigation'
import MemberRow from '@/components/MemberRow'
import { mapGetters } from 'vuex'

export default {
  beforeRouteEnter (to, from, next) {
    next(async (vm) => {
      await vm.$store.dispatch('autoSignIn')
    })
  },
  components: {
    layout: MasterDetailLayout,
    Sidebar,
    Navigation,
    MemberRow
  },
  data () {
    return {
      user: null,
      newBadge: '',
      team: null
    }
  },
  computed: {
    ...mapGetters(['loadedTeam', 'loading', 'teamMembers'])
  }
}
</script>

<style>

</style>
