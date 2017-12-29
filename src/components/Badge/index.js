import TextBadge from './TextBadge.vue'
import EmojiBadge from './EmojiBadge.vue'

const badgeTypes = ['text', 'emoji']

export default {
  name: 'badge',
  functional: true,
  render: function (h, ctx) {
    const badgeType = ctx.props.badge.type
    let component = ''
    if (badgeType === 'text') {
      component = TextBadge
    } else { // emoji
      component = EmojiBadge
    }
    return h(component, {
      props: {
        badge: ctx.props.badge
      }
    })
  },
  props: {
    badge: {
      type: Object,
      required: true,
      validator: (value) => {
        return value.badge && badgeTypes.includes(value.type)
      }
    }
  }
}
