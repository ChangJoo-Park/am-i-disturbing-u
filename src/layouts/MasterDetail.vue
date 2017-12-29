<docs>
# Master Detail 레이아웃

앱에서 사용할 사이드바와 컨텐츠 영역이 있는 레이아웃 입니다.

사용 예:

```
  <master-detail-layout>
    <navigation slot="navigation" />
    <sidebar slot="sidebar"/>
    ...content something
    ...content something
    ...content something
    ...content something
  </master-detail-layout>
```

</docs>

<template>
  <div class="master-detail-layout">
    <header class="navigation">
      <slot name="navigation"/>
    </header>
    <div class="sidebar-main-wrapper">
      <aside class="sidebar">
        <slot name="sidebar" />
      </aside>
      <main class="main">
        <slot/>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'master-detail-layout'
}
</script>

<style lang="scss">
.master-detail-layout {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .sidebar-main-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;

    .sidebar {
      order: 1;
      width: 30%;
      border-right: 1px solid black;
      margin: 0;
      padding: 0;
    }

    .main {
      flex: 1;
      order: 2;
      padding: 10px;
    }
  }

  .navigation {
    width: 100%;
    max-height: 40px;
  }
}
</style>
