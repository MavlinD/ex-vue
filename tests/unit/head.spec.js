import { _mount } from '../common'
import component from '@/components/base/index'

describe('components/home/index.vue', () => {
  it('test header', () => {
    const { $$ } = _mount({ component })
    expect($$.text()).toMatch('Тестовое задание для Lead-hit')
  })
})
