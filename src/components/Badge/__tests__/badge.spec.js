import { mount } from 'vue-test-utils'
import Badge from '../index'
import TextBadge from '../TextBadge.vue'

describe('Badge', () => {
  const createBadge = function (badgeProp) {
    return mount(Badge, {
      context: {
        props: {
          badge: badgeProp
        }
      }
    })
  }

  test('render text-badge when badge type is text', () => {
    const textBadgeProp = {
      body: 'Hello World',
      type: 'text',
      backgroundColor: '#ddd',
      color: '#fff'
    }
    const wrapper = createBadge(textBadgeProp)
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.contains('.text-badge-wrapper')).toBe(true)
  })
  test('render emoji-badge when badge type is emoji', () => {
    const emojiBadgeProp = {
      body: ':santa:',
      type: 'emoji'
    }
    const wrapper = createBadge(emojiBadgeProp)
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.contains('.emoji-badge')).toBe(true)
  })
})

describe('Text Badge', () => {
  const spy = jest.spyOn(console, 'error')
  afterEach(() => spy.mockReset())

  const dummyTextBadge = {
    type: 'text',
    body: 'Hello World',
    color: '#000'
  }

  test('is a Vue instance', () => {
    const wrapper = mount(TextBadge)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('must have one badge prop', () => {
    // const wrapper = mount(TextBadge)
    // const badge = wrapper.vm.$options.props.badge
    // // TODO: spy 방법을 찾아야함
    // expect(spy).toBeCalledWith(expect.stringContaining('[Vue warn]: Missing required prop'))
    // expect(badge.required).toBeTruthy()
    // expect(badge.type).toBe(Object)
  })

  test('badge must have type and body', () => {
    const wrapper = mount(TextBadge, {
      propsData: {
        badge: dummyTextBadge
      }
    })
    expect(wrapper.props().badge.type).toBe(dummyTextBadge.type)
    expect(wrapper.props().badge.body).toBe(dummyTextBadge.body)
  })

  test('must have one div', () => {
    const wrapper = mount(TextBadge, {
      propsData: {
        badge: dummyTextBadge
      }
    })
    expect(wrapper.contains('div')).toBe(true)
  })

  test('must have text-badge-wrapper and text-badge class', () => {
    const wrapper = mount(TextBadge, {
      propsData: {
        badge: dummyTextBadge
      },
      attachToDocument: true
    })
    expect(wrapper.contains('div.text-badge-wrapper')).toBe(true)
    expect(wrapper.contains('span.text-badge')).toBe(true)
    expect(wrapper.text()).toBe(dummyTextBadge.body)
  })
})
