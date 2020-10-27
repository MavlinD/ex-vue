import { _mount } from 'tests/common.js'
import component from '@/components/sign-in/index.vue'
// import { _mount } from '../common'
import flushPromises from 'flush-promises'

// global.fetch = require('node-fetch')

describe('components/sign-in/index.vue', () => {
  // const fetch = jest.fn()
  // jest.mock('fetch')
  // const mockSubmit = jest.spyOn(component.methods, 'submit')
  // const mockFetch = jest.spyOn(document, 'fetch')
  // const mockFetch = jest.spyOn(component.methods, 'fetch')
  // it('check submit event', () => {
  const $route = {
    path: '/analytics',
  }
  it('check NOT submit event', async () => {
    const values = {
      siteId: '5f8475902b0be670555f1bb3',
      // fetch,
      // mocks: {
      //   fetch,
      // },
      // fetch5: fetch,
      // fetch: mockFetch,
      // isFormValid: false,
    }
    const { $$ } = _mount({ component, values })
    const fetch = jest.fn()
    $$.vm.fetch = fetch
    await $$.find('form').trigger('submit') // !!
    await flushPromises()
    expect(fetch).toHaveBeenCalled()
    // $$.vm.update()
    // $$.find('input').setValue('5f8475902b0be670555f1bb3++')
    // await $$.find('form button').trigger('click') // !!
    // await $$.find('form').vm.$emit('submit')
    // await $$.find('.text2').trigger('click') // !!
    // await $$.trigger('click5', {
    //   button: 0,
    // })
    // await $$.vm.$emit('submit', 123) // !!
    // await $$.vm.trigger('submit')
    // await $$.find('form').trigger('submit.prevent')
    // expect(saveMock.mock.calls.length).toBe(1)
    // expect(saveMock.mock.calls.length).toBe(1)
    // expect(mockFetch).toHaveBeenCalled()
    // expect(mockFetch).not.toHaveBeenCalled()
    // console.log($$.html())
    // console.log($$.classes())
    // console.log($$.emitted())
    // console.log($$.vm.$data)
    // expect($$.click5).toBeCalled()
    // expect($$.emitted('click5')).toBeTruthy() //
    // expect($$.vm.('click')).toHaveLength(1)
    // expect($$.vm.$data.fetch).toHaveBeenCalled()
    // console.log($$.find('button'))
    // console.log($$.find('form'))
    // expect(fetch).toHaveBeenCalled()
    // expect(fetch).toBeCalled()
    // expect($$.vm.$data.fetch.called).toBe(true)
    // expect($$.emitted().click5).toBe(true)
    // expect($$.emitted().click5).toBeTruthy()
    // expect($$.vm.$data.fetch).toBe(true)
    // expect($$.emitted('submit')).toBeTruthy() // !!
    // expect($$.emitted().fetch).toBeTruthy()
    // expect($$.text()).toMatch('Вход')
  })
})
