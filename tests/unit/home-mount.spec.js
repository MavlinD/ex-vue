import App from '@/App.vue'
import { routsMount } from '../common'

describe('components/home/home.vue', () => {
  it('try use mount for a home', () => {
    const { $$ } = routsMount(App, { isAuth: false })
    expect($$.text()).toMatch('Тестовое задание для Lead-hit')
  })
})
