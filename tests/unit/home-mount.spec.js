import rootComp from '@/App.vue'
import { routsMount } from '../common'

describe('components/home/home.vue', () => {
  it('try use mount for a home', () => {
    const values = { isAuth: false }
    const { $$ } = routsMount({ rootComp, values })
    expect($$.text()).toMatch('Vue app for example')
  })
})
