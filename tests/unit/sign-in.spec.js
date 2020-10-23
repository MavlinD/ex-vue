import Comp from '@/components/sign-in/index.vue'
import { factory } from '../common'

describe('components/sign-in/index.vue', () => {
  it('check visible err msg', () => {
    const wrapper = factory(Comp, {
      errors: ['id сайта должен содержать'],
    })
    expect(wrapper.text()).toMatch('id сайта должен содержать')
  })
})
