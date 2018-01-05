<template>
  <layout v-if="loadedTeam">
    <navigation slot="navigation" />
    <sidebar
      slot="sidebar"
      :user="user"
    />
    <div>
      <member-row v-for="(member, index) in teamMembers" :key="index" :member="member" />
    </div>
  </layout>
</template>

<script>
import MasterDetailLayout from '@/layouts/MasterDetail'
import Sidebar from '@/components/Sidebar'
import Navigation from '@/components/Navigation'
import MemberRow from '@/components/MemberRow'
import { mapActions, mapGetters } from 'vuex'

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
  mounted () {
    const socket = this.$io.connect('localhost:8000')
    console.log(socket)
    socket.on('action', ({ type, payload }) => {
      switch (type) {
        case 'badge:add':
          this.addBadgeByPush(payload)
          break
        case 'badge:remove':
          this.removeBadgeByPush(payload)
          break
      }
    })
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
  },
  methods: {
    ...mapActions(['addBadgeByPush', 'removeBadgeByPush'])
  }
}
</script>

<style>

</style>
