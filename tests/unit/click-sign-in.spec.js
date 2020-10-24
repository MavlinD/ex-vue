import component from '@/components/sign-in/index.vue'
import { _mount, mockFetch } from '../common'
import flushPromises from 'flush-promises'

// global.fetch = require('node-fetch')

describe('components/sign-in/index.vue', () => {
  it('check visible err msg', async () => {
    const values = {
      fetch: mockFetch,
    }
    const { $$ } = _mount({ component, values })
    $$.find('input').setValue('5f8475902b0be670555f1bb3')
    await $$.find('form').trigger('submit.prevent')
    await flushPromises()
    console.log($$.html())
    expect($$.text()).toMatch('Вход')
  })
})
