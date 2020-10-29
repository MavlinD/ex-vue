import { _shallow } from '../common'
import component from '@/components/chart/index'

describe('components/home/index.vue', () => {
  it('test chart head', () => {
    const { $$ } = _shallow({ component })
    expect($$.text('Analytics'))
  })
})
