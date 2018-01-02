<template>
  <div class="navigation">
    <div class="logo-wrapper">
      <a href="/app" class="team-logo">{{ loadedTeam.name }}</a>
    </div>
    <div class="navigation-actions-wrapper">
      <div class="navigation-action-search">
        <input type="text" class="navigation-action-search-input" placeholder="Search Team member">
      </div>
      <ul class="navigation-actions">
        <li class="navigation-action"><button>Action One</button></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['loadedTeam'])
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  width: 100%;
  height: 40px;
  background-color: #ddd;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.logo-wrapper {
  width: 100px;
  height: 40px;
  overflow: hidden;
  display: flex;
  margin-left: 20px;
  align-content: center;
  align-items: center;

  .team-logo {
    font-size: 18px;
    text-decoration: none;
    color: #000;
    font-weight:bold;
  }

  .logo {
    flex: 1;
    width: 100px;
    height: 30px;
  }
}

.navigation-actions-wrapper {
  margin-right: 20px;
  display: flex;
  align-content: center;
  align-items: center;
}

.navigation-action-search {
  margin-right: 5px;
}

.navigation-actions {
  list-style: none;
  margin: 0;
  padding: 0;
}

.navigation-action {

}
</style>
