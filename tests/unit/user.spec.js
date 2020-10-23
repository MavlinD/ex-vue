// import App from '@/App'
// import Nav from '@/components/nav/index.vue'
import User from '@/components/user/index.vue'
// import { routsCaseFullMount } from '../common'
import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import { routes, router } from '@/routes'

const localVue = createLocalVue()
localVue.use(VueRouter)
describe('user/index.vue', () => {
  it('проверка НЕ удостоверенного пользователя', () => {
    // it('проверка НЕ удостоверенного пользователя', async () => {
    //   const router = new VueRouter({ routes })
    const $$ = shallowMount(User, {
      propsData: {
        // localVue,
        // router,
        isAuth: false,
      },
      // context: {
      // props: { show: true },
      // children: [Nav]
      // }
    })
    // router.push('/sign-in')
    // router.push('/')
    // await $$.vm.$nextTick()
    console.log($$.html())
    expect($$.text()).toMatch('Вход')
    // expect($$.findComponent(User).exists()).toBe(true)
  })
})
