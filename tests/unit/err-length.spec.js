import component from '@/components/sign-in/index.vue'
import { _shallow } from '../common'
import flushPromises from 'flush-promises'

describe('components/sign-in/index.vue', () => {
  it('check visible err msg', async () => {
    const values = {
      siteId: '1111',
    }
    const { $$ } = _shallow({ component, values })
    const errMsg = $$.vm.$props.tplErrMsg($$.vm.$props.rightSiteId)
    await $$.find('form').trigger('submit')
    await flushPromises()
    expect($$.text()).toMatch(errMsg)
  })
})
