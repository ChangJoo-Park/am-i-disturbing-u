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
    <header>
      <slot name="navigation" />
    </header>
    <div class="flex-wrapper flex-wrapper-column">
      <aside>
        <slot name="sidebar" />
      </aside>
      <main>
        <slot/>
      </main>
    </section>
  </div>
</template>

<script>
export default {
  name: 'master-detail-layout'
}
</script>

<style>

</style>
