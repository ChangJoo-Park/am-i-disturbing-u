<template>
  <div>
    <h1>Text Picker</h1>
    <div class="text-picker-wrapper">
      <text-picker
        @onCancelClicked="onCancel"
        @onSaveClicked="onSave"
      />
    </div>
  </div>
</template>

<script>
import TextPicker from '../src/components/TextPicker.vue'

export default {
  components: {
    TextPicker
  },
  methods: {
    onCancel () {
      window.alert('cancel')
    },
    onSave ({ text, colorSet }) {
      console.log(text, colorSet)
    }
  }
}
</script>

<style>
.text-picker-wrapper {
  width: 300px;
  height: 200px;
  border: 1px solid black;
  box-sizing: border-box;
}
</style>
