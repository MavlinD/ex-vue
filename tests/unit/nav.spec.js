import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import { routes } from '@/routes.js'
import VueRouter from 'vue-router'
import App from '@/App.vue'
// import User from '@/components/user/index.vue'
import Nav from '@/components/nav/index.vue'
// import NestedRoute from "@/components/NestedRoute.vue"
import { factory, routsCase } from '../common'

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('user/index.vue', () => {
  it('проверка НЕ удостоверенного пользователя', async () => {
    const { $$, router } = routsCase(Nav, '/sign-in')
    router.push('/sign-in')
    await $$.vm.$nextTick()
    expect($$.findComponent(Nav).exists()).toBe(true)
  })
})

/*
 describe('user/index.vue', () => {
 it('проверка НЕ удостоверенного пользователя', async () => {
 const router = new VueRouter({ routes })
 const isAuth = false
 const wrapper = factory(App, {
 // propsData: { isAuth },
 localVue,
 router,
 })
 router.push('/sign-in')
 await wrapper.vm.$nextTick()
 // console.log(wrapper)
 expect(wrapper.findComponent(Nav).exists()).toBe(true)
 // expect(wrapper.text()).toMatch('Вход')
 })
 })
 */
