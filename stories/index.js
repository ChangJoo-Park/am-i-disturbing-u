import { storiesOf } from '@storybook/vue'

import AvatarStory from './AvatarStory.vue'
import BadgeStory from './BadgeStory.vue'
import LayoutStory from './LayoutStory.vue'
import BadgeBoxStory from './BadgeBoxStory.vue'
import SwitchStory from './SwitchStory.vue'

storiesOf('Avatar', module)
  .add('기본 사용', () => ({
    components: { AvatarStory },
    template: '<avatar-story />'
  }))

storiesOf('Badge', module)
  .add('기본 사용', () => ({
    components: { BadgeStory },
    template: '<badge-story />'
  }))

storiesOf('BadgeForm', module)
  .add('기본 사용', () => ({
    components: { BadgeBoxStory },
    template: '<badge-box-story />'
  }))

storiesOf('Switch', module)
  .add('기본 사용', () => ({
    components: { SwitchStory },
    template: '<switch-story />'
  }))

storiesOf('Layout', module)
  .add('Full Layout', () => ({
    components: { LayoutStory },
    template: '<layout-story mode="full" />'
  }))
  .add('Master Detail Layout', () => ({
    components: { LayoutStory },
    template: '<layout-story mode="master-detail" />'
  }))
