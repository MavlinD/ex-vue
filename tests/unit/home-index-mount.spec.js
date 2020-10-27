import rootComp from '@/components/base/index.vue'
import { routsMount } from '../common'

describe('components/sign-in/index.vue', () => {
  it('try use mount for a home', async () => {
    const { $$ } = routsMount({ rootComp })
    expect($$.text()).toMatch('Vue app for example')
  })
})
