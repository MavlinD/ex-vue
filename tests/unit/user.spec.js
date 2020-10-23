import { routsMount } from '../common'

describe('components/user/index.vue', () => {
  it('проверка НЕ удостоверенного пользователя', () => {
    const values = { isAuth: false }
    const { $$ } = routsMount({ values })
    // console.log($$.html())
    expect($$.text()).toMatch('Вход')
  })
})
