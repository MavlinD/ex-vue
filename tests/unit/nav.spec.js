import Nav from '@/components/nav/index.vue'
import { routsShallowMount } from '../common'

describe('user/index.vue', () => {
  it('проверка nav', () => {
    const { $$ } = routsShallowMount({})
    expect($$.findComponent(Nav).exists()).toBe(true)
  })
})
