<docs>
# Full 레이아웃

One Column 레이아웃 입니다.
전체 화면을 사용합니다.

사용 예:

```
  <full-layout>
    ...content something
    ...content something
    ...content something
    ...content something
  </full-layout>
```

네비게이션이 필요하면 _navigation_ 슬롯에 추가하면 됩니다.

```
  <full-layout>
    <navigation slot="navigation" />
    ...content something
    ...content something
    ...content something
    ...content something
  </full-layout>
```
</docs>

<template>
  <div class="full-layout">
    <header>
      <slot name="navigation" />
    </header>
    <main>
      <slot/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'full-layout'
}
</script>

<style>

</style>
