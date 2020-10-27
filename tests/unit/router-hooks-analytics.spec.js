import { _shallow } from 'tests/common'
import Analytics from '@/components/analytics/index.vue'
import { checkSiteId } from '@/components/analytics'
import flushPromises from 'flush-promises'

jest.mock('@/components/analytics')

describe('components/analytics/index.vue', () => {
  it('проверка навигационного хука компонента', async () => {
    const { $$ } = _shallow({ component: Analytics })
    const next = jest.fn()
    Analytics.beforeRouteEnter.call($$.vm, undefined, undefined, next)
    await $$.vm.$nextTick()
    // console.log($$.vm.$route.path)
    await flushPromises()
    expect(checkSiteId).toHaveBeenCalled()
  })
})
