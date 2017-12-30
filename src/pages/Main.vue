<template>
  <layout>
    <navigation slot="navigation" />
    <sidebar
      slot="sidebar"
    />
    <h1>This is Main Page!</h1>
  </layout>
</template>

<script>
import MasterDetailLayout from '@/layouts/MasterDetail'
import Sidebar from '@/components/Sidebar'
import Navigation from '@/components/Navigation'
import { auth } from 'firebase'
import { badgesRef } from '../firebase'

export default {
  beforeRouteEnter (to, from, next) {
    auth().onAuthStateChanged(user => {
      if (user) {
        next(vm => { vm.user = user })
      } else {
        next({ name: 'login-page' })
      }
    })
  },
  data () {
    return {
      user: null,
      newBadge: ''
    }
  },
  firebase: {
    badges: badgesRef
  },
  components: {
    layout: MasterDetailLayout,
    Sidebar,
    Navigation
  }
}
</script>

<style>

</style>
