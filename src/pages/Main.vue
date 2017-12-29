<template>
  <layout>
    <navigation slot="navigation" />
    <sidebar slot="sidebar" />
    <h1>This is Main Page!</h1>
  </layout>
</template>

<script>
import MasterDetailLayout from '@/layouts/MasterDetail'
import Sidebar from '@/components/Sidebar'
import Navigation from '@/components/Navigation'

export default {
  components: {
    layout: MasterDetailLayout,
    Sidebar,
    Navigation
  }
}
</script>

<style>

</style>
