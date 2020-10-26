import component from '@/components/sign-in/index.vue'
import { _mount } from '../common'
import flushPromises from 'flush-promises'

describe('components/sign-in/index.vue', () => {
  const fetch = jest.fn()
  it('check submit event', async () => {
    const values = {
      siteId: '5f8475902b0be670555f1bb3',
      fetch,
    }
    const { $$ } = _mount({ component, values })
    await $$.find('form').trigger('submit')
    await flushPromises()
    // console.log($$.html())
    expect(fetch).toHaveBeenCalled()
  })
})
