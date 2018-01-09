<template>
  <div class="picker picker-text">
    <div class="picker-text-input-wrapper">
      <input type="text" v-model="text" class="picker-text-input">
    </div>
    <ul class="text-picker-color-list">
      <li
        v-for="set in colorCombinations"
        :key="set.bgColor"
        class="text-picker-color-item"
        :style="{ color: set.color, backgroundColor: set.bgColor}"
        :class="{ selected: set.bgColor === selectedColor.bgColor }"
        @click="selectedColor = set"
      >
      </li>
    </ul>
    <div class="picker-actions">
      <button @click="$emit('onCancelClicked')">Cancel</button>
      <button @click="$emit('onSaveClicked', { text, colorSet: selectedColor })">Save</button>
    </div>
  </div>
</template>

<script>
// TODO: 다른곳에서 정의해야함
const colorSet = [
  {
    color: '#fff',
    bgColor: '#1abc9c'
  },
  {
    color: '#fff',
    bgColor: '#2ecc71'
  },
  {
    color: '#fff',
    bgColor: '#3498db'
  },
  {
    color: '#fff',
    bgColor: '#9b59b6'
  },
  {
    color: '#fff',
    bgColor: '#34495e'
  },
  {
    color: '#fff',
    bgColor: '#f1c40f'
  },
  {
    color: '#fff',
    bgColor: '#e67e22'
  },
  {
    color: '#fff',
    bgColor: '#e74c3c'
  },
  {
    color: '#333',
    bgColor: '#ecf0f1'
  },
  {
    color: '#fff',
    bgColor: '#95a5a6'
  }
]

export default {
  data () {
    return {
      text: '',
      colorCombinations: colorSet,
      selectedColor: colorSet[Math.floor((Math.random() * colorSet.length))]
    }
  }
}
</script>

<style lang="scss" scoped>
.picker {
  width: 100%;

  .picker-actions {
    text-align: center;
  }
}

.picker-text-input-wrapper {
  overflow: hidden;
  padding: 10px 0;
  display: flex;
}

.picker-text-input {
  width: 100%;
  height: 30px;
  padding: 5px 3px;
  margin: 0 5px 3px 5px;
  flex: 1;
}

.text-picker-color-list {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;

  .text-picker-color-item {
    display: inline-block;
    width: 50px;
    height: 30px;
    margin-right: 5px;
    margin-bottom: 10px;
    position: relative;
    cursor: pointer;

    &.selected::after {
      position: absolute;
      top: 3px;
      left: 0;
      width: 100%;
      height: 100%;
      content: '\2713';
      font-weight: bold;
    }
  }
}
</style>
