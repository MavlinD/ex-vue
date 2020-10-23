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
    expect(wrapper.text()).toMatch('Это домашняя страница')
  })
})
