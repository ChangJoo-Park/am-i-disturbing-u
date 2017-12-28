import { storiesOf } from '@storybook/vue'

import HelloWorld from '../src/components/HelloWorld.vue'

storiesOf('HelloWorld', module)
  .add('기본 사용', () => ({
    components: { HelloWorld },
    template: '<hello-world />'
  }))
