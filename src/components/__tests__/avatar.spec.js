import { mount } from 'vue-test-utils'
import Avatar from '../Avatar.vue'

describe('Avatar', () => {
  const dummyImg = 'http://via.placeholder.com/100x100'
  const defaultSize = 'normal'

  test('is a Vue instance', () => {
    const wrapper = mount(Avatar)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('has one image tag', () => {
    const wrapper = mount(Avatar)
    expect(wrapper.contains('img')).toBe(true)
  })

  test('has default props', () => {
    const wrapper = mount(Avatar)
    expect(wrapper.props().img).toBe(dummyImg)
    expect(wrapper.props().size).toBe(defaultSize)
  })

  test('has passed props', () => {
    const notURLImage = 'This is url'
    const wrapper = mount(Avatar, {
      propsData: {
        img: notURLImage,
        size: 'large'
      }
    })
    expect(wrapper.props().img).toBe(notURLImage)
    expect(wrapper.props().size).toBe('large')
  })

  test('has class by size', () => {
    const wrapper = mount(Avatar)
    expect(wrapper.contains('.avatar-normal')).toBe(true)

    const largeAvatar = mount(Avatar, {
      propsData: { size: 'large' }
    })
    expect(largeAvatar.contains('.avatar-large')).toBe(true)

    const smallAvatar = mount(Avatar, {
      propsData: { size: 'small' }
    })
    expect(smallAvatar.contains('.avatar-small')).toBe(true)

  })
})
