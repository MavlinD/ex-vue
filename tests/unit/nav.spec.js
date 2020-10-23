import Nav from '@/components/nav/index.vue'
import { routsShallow } from '../common'

describe('user/index.vue', () => {
  it('проверка nav', () => {
    const { $$ } = routsShallow({})
    expect($$.findComponent(Nav).exists()).toBe(true)
  })
})
