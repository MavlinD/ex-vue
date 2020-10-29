import component from '@/components/sign-in/index.vue'
import { routsMount } from '../common'
import flushPromises from 'flush-promises'
import 'jest-localstorage-mock'

describe('components/sign-in/index.vue', () => {
  it('check successfull auth && save id in localStorage', async () => {
    const values = {
      siteId: '5f8475902b0be670555f1bb3', // set data
    }
    const { $$ } = routsMount({ component, values })
    $$.vm.fetch = jest.fn() // mock global fetch
    const tt = jest.spyOn($$.vm.$router, 'push') // set spy
    await $$.find('form').trigger('submit') // emit submit
    await $$.vm.handleResponse({ status: 200 }) // run component`s method
    await $$.vm.$nextTick()
    await flushPromises() // resolve all promices
    const KEY = 'leadhit-site-id'
    const VALUE = $$.vm.$props.rightSiteId
    expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE)
    expect(tt).toBeCalled()
  })
})
