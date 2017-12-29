<template>
  <div id="admin-page">
    <h1>This is Admin Page!</h1>
    <div class="data-wrapper">
      {{ teams }}
    </div>
    <div class="data-wrapper">
      {{ users }}
    </div>
    <div class="data-wrapper">
      {{ badges }}
    </div>
    <div class="data-wrapper">
      {{ pings }}
    </div>
    <div class="data-wrapper">
      {{ logs }}
    </div>
  </div>
</template>

<script>
import { teamsRef, usersRef, badgesRef, pingsRef, logsRef } from '../store'

export default {
  firebase: {
    teams: teamsRef,
    users: usersRef,
    badges: badgesRef,
    pings: pingsRef,
    logs: logsRef
  }
}
</script>

<style>
#admin-page {
  padding: 10px;
  width: 100%;
  height: 100%;
  overflow: auto;
}
.data-wrapper {
  border: 1px solid black;
  min-height: 400px;
  overflow: hidden;
  margin-bottom: 10px;
}
</style>
