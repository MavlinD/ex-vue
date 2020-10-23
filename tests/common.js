import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
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

export const routsCase = (values = {}, rootComp = App) => {
  const localVue = createLocalVue()
  localVue.use(VueRouter)
  const router = new VueRouter({ routes })

  return {
    $$: shallowMount(rootComp, {
      data() {
        return {
          localVue,
          router,
          ...values,
        }
      },
    }),
    router,
  }
}

export const routsCaseFullMount = (values = {}, rootComp = App) => {
  const localVue = createLocalVue()
  localVue.use(VueRouter)
  const router = new VueRouter({ routes })

  return {
    $$: mount(rootComp, {
      data() {
        return {
          localVue,
          router,
          ...values,
        }
      },
    }),
    router,
  }
}
