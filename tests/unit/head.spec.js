import { mount, shallowMount } from '@vue/test-utils'
import Home from '@/components/home/index.vue'

const factory = (values = {}) => {
  return shallowMount(Home, {
    data() {
      return {
        ...values,
      }
    },
  })
}

describe('home/index.vue', () => {
  it('check h2 in head', () => {
    const wrapper = factory()
    expect(wrapper.text()).toMatch('Тестовое задание для Lead-hit')
  })
})
