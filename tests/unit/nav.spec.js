import Nav from '@/components/nav/index.vue'
import { routsCase } from '../common'

describe('user/index.vue', () => {
  it('проверка nav', async () => {
    const { $$, router } = routsCase()
    router.push('/sign-in')
    await $$.vm.$nextTick()
    // console.log($$.html())
    expect($$.findComponent(Nav).exists()).toBe(true)
  })
})
