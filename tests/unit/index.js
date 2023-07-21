import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

// eslint-disable-next-line no-undef
describe('Home.vue', () => {
  // eslint-disable-next-line no-undef
  it('renders props.msg when passed', () => {
    const msg = 'new messagd'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    // eslint-disable-next-line no-undef
    expect(wrapper.text()).toMatch(msg)
  })
})
