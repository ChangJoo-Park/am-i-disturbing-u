<template>
  <form-box title='Status'>
    <ul class="status-list">
      <li class="status-item">
        <span class="status-item-label">Next In</span>
        <div v-if="nextIn" @click="isNextInTimePickerOpen = true">{{ nextIn }}</div>
        <div v-else @click="isNextInTimePickerOpen = true">NONE</div>
        <dropdown v-if="isNextInTimePickerOpen" @away="isNextInTimePickerOpen = false">
          <form @submit.prevent="onNextInTimeSubmit" class="status-time-dropdown-form">
            <div class="status-item-dropdown-picker-wrapper">
              <input id="time" type="time" class="status-item-dropdown-picker" v-model="nextIn">
            </div>
            <div class="status-item-dropdown-button-wrapper">
              <input type="submit" value="SAVE">
            </div>
          </form>
        </dropdown>
      </li>
      <li class="status-item">
        <span class="status-item-label">Next Out</span>
        <div v-if="nextOut" @click="isNextOutTimePickerOpen = true">{{ nextOut }}</div>
        <div v-else @click="isNextOutTimePickerOpen = true">NONE</div>
        <dropdown v-if="isNextOutTimePickerOpen" @away="isNextOutTimePickerOpen = false">
          <form @submit.prevent="isNextOutTimeSubmit" class="status-time-dropdown-form">
            <div class="status-item-dropdown-picker-wrapper">
              <input id="time" type="time" class="status-item-dropdown-picker" v-model="nextOut">
            </div>
            <div class="status-item-dropdown-button-wrapper">
              <input type="submit" value="SAVE">
            </div>
          </form>
        </dropdown>
      </li>
      <li class="status-item">
        <span class="status-item-label">Remote</span>
        <toggle-switch :is-on="currentUser.isRemote" @changed="onClickRemote"/>
      </li>
      <li class="status-item">
        <span class="status-item-label">Do not disturb</span>
        <toggle-switch :is-on="currentUser.isDoNotDisturb" @changed="onClickDoNotDisturb"/>
      </li>
    </ul>
  </form-box>
</template>

<script>
import FormBoxLayout from '../layouts/FormBox'
import ToggleSwitch from '@/components/ToggleSwitch'
import Dropdown from '@/components/Dropdown'
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    user: {
      type: Object
    }
  },
  components: {
    'form-box': FormBoxLayout,
    ToggleSwitch,
    Dropdown
  },
  data () {
    return {
      isNextInTimePickerOpen: false,
      isNextOutTimePickerOpen: false,
      nextIn: '',
      nextOut: ''
    }
  },
  computed: {
    ...mapGetters(['currentUser'])
  },
  watch: {
    'currentUser.nextIn': function (nextIn) {
      this.nextIn = nextIn
    },
    'currentUser.nextOut': function (nextOut) {
      this.nextOut = nextOut
    }
  },
  mounted () {
    this.nextIn = this.currentUser.nextIn
    this.nextOut = this.currentUser.nextOut
  },
  methods: {
    ...mapActions(['updateStatus']),
    onClickRemote () {
      this.updateStatus({ isRemote: !this.user.isRemote })
    },
    onClickDoNotDisturb () {
      this.updateStatus({ isDoNotDisturb: !this.user.isDoNotDisturb })
    },
    onNextInTimeSubmit () {
      console.log('onNextInTimeSubmit')
      this.isNextInTimePickerOpen = false
      if (this.nextIn === this.currentUser.nextIn) {
        return
      }
      this.updateStatus({ nextIn: this.nextIn })
    },
    isNextOutTimeSubmit () {
      if (this.nextOut === this.currentUser.nextOut) {
        return
      }
      this.updateStatus({ nextOut: this.nextOut })
      this.isNextOutTimePickerOpen = false
    }
  }
}
</script>

<style lang="scss">
.status-list {
  list-style: none;
  margin: 0;
  padding: 0;

  .status-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px 10px;
    border-bottom: 1px solid black;
    position: relative;
  }
}
.status-time-dropdown {
  display: flex;
}
.status-time-dropdown-form {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
}

.status-item-dropdown-picker-wrapper {
  width: 100%;
  flex: 1;

  .status-item-dropdown-picker {
    width: 100%;
  }
}

.status-item-dropdown-button-wrapper {
  text-align: right;
  padding-left: 5px;
}

</style>
