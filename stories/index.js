import { storiesOf } from '@storybook/vue'

import AvatarStory from './AvatarStory.vue'

storiesOf('Avatar', module)
  .add('기본 사용', () => ({
    components: { AvatarStory },
    template: '<avatar-story />'
  }))
