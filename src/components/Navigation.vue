<template>
  <div class="navigation">
    <div class="logo-wrapper">
      <img src="https://www.google.co.kr/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" class="logo" width="100px">
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
export default {

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
