import { routsMount } from '../common'
import rootComp from '@/components/home/index'

describe('components/home/index.vue', () => {
  it('try use mount for a home', async () => {
    const { $$ } = routsMount({ rootComp })
    expect($$.text()).toMatch('Это домашняя страница')
  })
})
