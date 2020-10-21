import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import './main.scss'
import titleMixin from './components/mixins/titleMixin'

Vue.config.productionTip = false
Vue.mixin(titleMixin)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
