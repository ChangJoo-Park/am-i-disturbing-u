<template>
  <div class="settings" v-if="currentUser">
    <div>
      <ul class="tab-list">
        <li
          v-for="tab in tabs"
          :key="tab.id"
          class="tab-list-item"
          :class="{ active: tab.isActive }"
          @click="changeTab(tab)"
        >{{ tab.name }}</li>
      </ul>
      <div class="tab-content" v-if="currentTab">
        <component :is="currentTab.component" />
        <button @click="$router.push({ name: 'main-page'})">Back To App</button>
      </div>
    </div>
  </div>
</template>

<script>
import Account from '@/pages/main/settings/Account'
import Team from '@/pages/main/settings/Team'
import { mapGetters } from 'vuex'

export default {
  components: {
    Account,
    Team
  },
  data () {
    return {
      adminTabs: [
        {
          name: 'Account',
          id: 0,
          component: Account,
          isActive: true
        },
        {
          name: 'Team',
          id: 1,
          component: Team,
          isActive: false
        }
      ],
      memberTabs: [
        {
          name: 'Account',
          id: 0,
          component: Account,
          isActive: true
        }
      ],
      currentTab: null
    }
  },
  computed: {
    ...mapGetters(['currentUser']),
    tabs () {
      if (this.currentUser) {
        if (this.currentUser._id === this.currentUser.team.owner._id) {
          return this.adminTabs
        } else {
          return this.memberTabs
        }
      }
    }
  },
  mounted () {
    this.currentTab = this.tabs[0]
    this.currentTab.isActive = true
  },
  methods: {
    changeTab (tab) {
      this.currentTab.isActive = false
      this.currentTab = tab
      this.currentTab.isActive = true
    }
  }
}
</script>

<style lang="scss">
.tab-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  margin-bottom: 5px;
}
.tab-list-item {
  cursor: pointer;
  user-select: none;
  padding: 5px 10px;
  margin-right: 5px;
  border-radius: 5px;
  border: 1px solid #fff;

  &.active {
    font-weight: bold;
    border-color: #333;
  }
}
</style>
