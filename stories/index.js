import { storiesOf } from '@storybook/vue'

import AvatarStory from './AvatarStory.vue'
import BadgeStory from './BadgeStory.vue'
import LayoutStory from './LayoutStory.vue'

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

storiesOf('Layout', module)
  .add('Full Layout', () => ({
    components: { LayoutStory },
    template: '<layout-story mode="full" />'
  }))
  .add('Master Detail Layout', () => ({
    components: { LayoutStory },
    template: '<layout-story mode="master-detail" />'
  }))
