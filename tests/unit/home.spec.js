import { routsMount } from '../common'
import component from '@/components/home/index'

describe('components/home/index.vue', () => {
  it('try use mount for a home', async () => {
    const { $$ } = routsMount({ component })
    expect($$.text()).toMatch('Это домашняя страница')
  })
})
