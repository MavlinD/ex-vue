import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import { routes } from '@/routes.js'
import App from '@/App.vue'

export const _shallow = ({ component = App, values = {} }) => {
  return {
    $$: shallowMount(component, {
      data() {
        return {
          ...values,
        }
      },
    }),
  }
}

export const routsShallowMount = ({
  rootComp = App,
  values = {},
  mocks = {},
}) => {
  const localVue = createLocalVue()
  localVue.use(VueRouter)
  const router = new VueRouter({ routes })

  return {
    $$: shallowMount(rootComp, {
      localVue,
      router,
      mocks,
      data() {
        return {
          ...values,
        }
      },
    }),
    router,
  }
}

export const routsMount = ({ component = App, values = {}, mocks = {} }) => {
  const localVue = createLocalVue()
  localVue.use(VueRouter)
  const router = new VueRouter({ routes, mode: 'abstract' })

  return {
    $$: mount(component, {
      localVue,
      router,
      ...mocks,
      stubs: ['router-link', 'router-view'],
      data() {
        return {
          ...values,
        }
      },
    }),
    router,
  }
}

export const _mount = ({ component = App, values = {} }) => {
  return {
    $$: mount(component, {
      data() {
        return {
          ...values,
        }
      },
    }),
  }
}

export const mockFetch = (_url, _data) => {
  return new Promise((resolve, reject) => {
    resolve()
  })
}
