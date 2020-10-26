import component from '@/components/sign-in/index.vue'
import { _mount } from '../common'
import flushPromises from 'flush-promises'

describe('components/sign-in/index.vue', () => {
  it('check submit event', async () => {
    const values = {
      siteId: '5f8475902b0be670555f1bb3',
    }
    const { $$ } = _mount({ component, values })
    const fetch = jest.fn()
    $$.vm.fetch = fetch
    await $$.find('form').trigger('submit') // !!
    await flushPromises()
    expect(fetch).toHaveBeenCalled()
  })
})
