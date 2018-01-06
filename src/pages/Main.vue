<template>
  <layout>
    <navigation slot="navigation" />
    <sidebar slot="sidebar" />
    <router-view />
  </layout>
</template>

<script>
import MasterDetailLayout from '@/layouts/MasterDetail'
import Sidebar from '@/components/Sidebar'
import Navigation from '@/components/Navigation'
import { mapActions } from 'vuex'

export default {
  beforeRouteEnter (to, from, next) {
    next(async (vm) => {
      await vm.$store.dispatch('autoSignIn')
    })
  },
  components: {
    layout: MasterDetailLayout,
    Sidebar,
    Navigation
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
        case 'status:update':
          this.updateStatusByPush(payload)
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
  methods: {
    ...mapActions(['addBadgeByPush', 'removeBadgeByPush', 'updateStatusByPush'])
  }
}
</script>

<style>

</style>
