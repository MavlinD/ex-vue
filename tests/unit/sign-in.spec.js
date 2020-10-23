import component from '@/components/sign-in/index.vue'
import { _shallow } from '../common'

describe('components/sign-in/index.vue', () => {
  it('check visible err msg', () => {
    const values = {
      errors: ['id сайта должен содержать'],
    }
    const wrapper = _shallow({ component, values })
    expect(wrapper.text()).toMatch('id сайта должен содержать')
  })
})
