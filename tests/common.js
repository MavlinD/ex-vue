import { createLocalVue, shallowMount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import { routes } from '@/routes.js'
import App from '@/App.vue'

export const factory = (component, values = {}) => {
  return shallowMount(component, {
    data() {
      return {
        ...values,
      }
    },
  })
}

export const routsCase = (component, url, values = {}, rootComp = App) => {
  const localVue = createLocalVue()
  localVue.use(VueRouter)
  const router = new VueRouter({ routes })

  return {
    $$: shallowMount(rootComp, component, {
      data() {
        return {
          localVue,
          router,
          ...values,
        }
      },
    }),
    router,
    // router.push(url)
    // await wrapper.vm.$nextTick()
  }
}
// return async () => {
//   // import { createLocalVue, shallowMount } from '@vue/test-utils'
//   const wrapper = shallowMount(rootComp, component, {
//     data() {
//       return {
//         localVue,
//         router,
//         ...values,
//       }
//     },
//   })
//   router.push(url)
//   await wrapper.vm.$nextTick()
// }
// }
