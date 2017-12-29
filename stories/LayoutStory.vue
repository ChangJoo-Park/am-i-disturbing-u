<template>
  <div>
    <div v-if="mode === 'full'">
      <h1>Full Layout</h1>
      <div class="dummy-screen">
        <full-layout>
          <div>
            Hi How are you
          </div>
        </full-layout>
      </div>

      <div class="dummy-screen">
        <full-layout>
          <div slot="navigation">
            <strong>Logo</strong>
          </div>
          <div>
            Hi How are you
          </div>
        </full-layout>
      </div>
    </div>
    <div v-if="mode === 'master-detail'">
      <h1>Master Detail Layout</h1>
      <div class="dummy-screen">
        <master-detail-layout>
          <div slot="sidebar">
            <ul>
              <li>메뉴 1</li>
              <li>메뉴 2</li>
              <li>메뉴 3</li>
              <li>메뉴 4</li>
              <li>메뉴 5</li>
              <li>메뉴 6</li>
            </ul>
          </div>

          <div>
            Hi How are you
          </div>
        </master-detail-layout>
      </div>

      <div class="dummy-screen">
        <master-detail-layout>
          <div slot="navigation">
            <strong>Logo</strong>
          </div>
          <div slot="sidebar">
            <ul>
              <li>메뉴 1</li>
              <li>메뉴 2</li>
              <li>메뉴 3</li>
              <li>메뉴 4</li>
              <li>메뉴 5</li>
              <li>메뉴 6</li>
            </ul>
          </div>

          <div>
            Hi How are you
          </div>
        </master-detail-layout>
      </div>
    </div>
  </div>
</template>

<script>
import FullLayout from '../src/layouts/Full.vue'
import MasterDetailLayout from '../src/layouts/MasterDetail.vue'

export default {
  props: {
    mode: String
  },
  components: {
    FullLayout,
    MasterDetailLayout
  }
}
</script>

<style>
.dummy-screen {
  width: 800px;
  height: 600px;
  border: 1px solid black;
  margin-left: 10px;
  margin-bottom: 20px;
}
</style>
