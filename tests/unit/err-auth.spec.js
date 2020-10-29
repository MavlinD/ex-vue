import component from '@/components/sign-in/index.vue'
import { _shallow } from '../common'
import flushPromises from 'flush-promises'

describe('components/sign-in/index.vue', () => {
  it('check visible err msg', async () => {
    const values = {
      siteId: '5f8475902b0be670555f1bb8',
    }
    const { $$ } = _shallow({ component, values })
    const errMsg = $$.vm.$props.tplErrAuth($$.vm.$props.rightSiteId)
    $$.vm.fetch = jest.fn()
    await $$.find('form').trigger('submit')
    $$.vm.handleResponse({ status: 401 })
    await flushPromises()
    expect($$.html()).toMatch(errMsg)
  })
})
