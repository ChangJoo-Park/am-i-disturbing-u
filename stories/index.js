import { storiesOf } from '@storybook/vue'

import AvatarStory from './AvatarStory.vue'
import BadgeStory from './BadgeStory.vue'

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
