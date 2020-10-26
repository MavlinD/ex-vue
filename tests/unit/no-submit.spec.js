import component from '@/components/sign-in/index.vue'
import { _mount } from '../common'

describe('components/sign-in/index.vue', () => {
  it('check NO submit event', () => {
    const values = {
      siteId: 'fake ID',
    }
    const { $$ } = _mount({ component, values })
    const fetch = jest.fn()
    $$.vm.fetch = fetch
    $$.find('form').trigger('submit')
    expect(fetch).not.toHaveBeenCalled()
  })
})
