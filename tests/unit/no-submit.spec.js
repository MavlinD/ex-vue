import component from '@/components/sign-in/index.vue'
import { _mount, _shallow } from '../common'

describe('components/sign-in/index.vue', () => {
  const fetch = jest.fn()
  it('check NO submit event', () => {
    const values = {
      fetch,
      siteId: 'fake ID',
    }
    const { $$ } = _shallow({ component, values })
    $$.find('form').trigger('submit')
    // console.log($$.html())
    expect(fetch).not.toBeCalled()
  })
})
