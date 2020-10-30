import { routsMount } from '../common'

describe('components/nav/index.vue', () => {
  it('проверка удостоверенного пользователя', () => {
    const values = { props: { isAuth: true } }
    const { $$ } = routsMount({ values })
    // console.log($$.html())
    expect($$.text()).toMatch('Sign-In')
  })
})
