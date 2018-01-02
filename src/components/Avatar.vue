<template>
  <div class="avatar" :class="avatarClass">
    <img :src="gravatarImage" class="avatar-image">
  </div>
</template>

<script>
import gravatar from 'gravatar'
export default {
  props: {
    img: {
      type: String,
      required: false,
      default: 'http://via.placeholder.com/100x100'
    },
    size: {
      type: String,
      required: false,
      default: 'normal',
      validator: (value) => {
        const SIZES = ['normal', 'large', 'small']
        return SIZES.includes(value)
      }
    }
  },
  computed: {
    gravatarImage () {
      return gravatar.url(this.img, { protocol: 'http', s: '100' });
    },
    avatarClass: function () {
      return `avatar-${this.size}`
    }
  }
}
</script>

<style lang="scss">
.avatar {
  display: inline-block;
  border-radius: 100%;
  overflow: hidden;
  .avatar-image {
    width: 100%;
    height: 100%;
  }
}

.avatar-normal {
  width: 50px;
  height: 50px;
}

.avatar-large {
  width: 100px;
  height: 100px;
}

.avatar-small {
  width: 30px;
  height: 30px;
}
</style>
