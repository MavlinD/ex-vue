import { routsMount } from '../common'
import User from '@/components/user/index'

describe('components/user/index.vue', () => {
  it('проверка удостоверенного пользователя', () => {
    const values = { props: { isAuth: true } }
    const { $$ } = routsMount({ rootComp: User, values })
    // console.log($$.html())
    expect($$.text()).toMatch('Выход')
  })
})
