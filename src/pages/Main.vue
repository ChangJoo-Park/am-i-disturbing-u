<template>
  <layout>
    <sidebar slot="sidebar" />
    <h1>This is Main Page!</h1>
  </layout>
</template>

<script>
import MasterDetailLayout from '@/layouts/MasterDetail'
import Sidebar from '@/components/Sidebar'

export default {
  components: {
    layout: MasterDetailLayout,
    Sidebar
  }
}
</script>

<style>

</style>
