<template>
  <div class="settings">
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
        <div v-if="currentTab.id === 0">
          <h1>Hello</h1>
        </div>
        <div v-if="currentTab.id === 1">
          <h1>World</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabs: [
        {
          name: 'Account',
          id: 0,
          isActive: true
        },
        {
          name: 'Team',
          id: 1,
          isActive: false
        }
      ],
      currentTab: null
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
.tab-list-item {
  &.active {
    font-weight: bold;
  }
}
</style>
