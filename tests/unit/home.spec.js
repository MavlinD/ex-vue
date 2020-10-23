import { mount, shallowMount } from '@vue/test-utils'
import HomePage from '@/components/home/home.vue'

const factory = (values = {}) => {
  return shallowMount(HomePage, {
    data() {
      return {
        ...values,
      }
    },
  })
}

describe('home/home.vue', () => {
  it('проверка home page', () => {
    const wrapper = factory()
    // const wrapper = shallowMount(Home, {})
    // const wrapper2 = mount(Home, {})
    // const wrapper = mount(Home, {})
    // console.log(wrapper.html())
    // console.log('='.repeat(50))
    // console.log(wrapper2.html())
    expect(wrapper.text()).toMatch('Это домашняя страница')
  })
})
