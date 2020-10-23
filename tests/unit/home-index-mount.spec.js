import Comp from '@/components/home/index.vue'
import { routsMount } from '../common'

describe('components/sign-in/index.vue', () => {
  it('try use mount for a home', async () => {
    const { $$ } = routsMount({}, Comp)
    expect($$.text()).toMatch('Тестовое задание для Lead-hit')
  })
})
