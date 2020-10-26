<template lang="pug">
  include index
</template>

<script>
  import './_index.scss'
  import SlideUpDown from 'vue-slide-up-down'
  import { router } from '@/routes'

  export default {
    title: 'Вход',
    name: 'SignIn',
    props: {
      head: String,
      rightSiteId: {
        type: String,
        default: '5f8475902b0be670555f1bb3',
      },
    },
    components: {
      SlideUpDown,
    },
    data() {
      return {
        siteId: '',
        errMsg: `id сайта должен содержать ${this.rightSiteId.length} символа.`,
        errAuth: `id сайта должен быть равен:<span>${this.rightSiteId}</span>`,
        isErrMsg: false,
        isErrAuth: false,
        isFormValid: false,
        errors: [],
        isBtnEnabled: true,
        isInit: false,
        submit: () => {
          // console.log('emit submit')
          this.initForm()
          this.validate()
          if (!this.isFormValid) return
          this.fetch()
        },
        fetch: () => {
          // console.log('run fetch')
          const inputVal = this.siteId
          fetch('https://track-api.leadhit.io/client/test_auth', {
            method: 'get',
            headers: {
              'Api-Key': '5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo',
              'Leadhit-Site-Id': unescape(encodeURIComponent(inputVal)),
            },
            responseType: 'json',
          })
            .then(response => {
              // console.log(response)
              this.handleResponse(response)
            })
            .catch(error => {
              console.log(error)
            })
        },
        handleResponse(response) {
          if (response.status === 200) {
            localStorage.setItem('leadhit-site-id', this.siteId)
            router.push({ name: 'Analytics' })
          } else {
            this.errors.push(this.errAuth)
            this.isErrMsg = true
            this.isBtnEnabled = true
          }
        },
        initForm() {
          // console.log(this)
          // здесь зыс корректен, тк метод вызывается не на компоненте, он указан не в разметке и вызывается из другого метода, того где зыс уже есть
          this.isInit = true
        },
        validate: () => {
          if (!this.isInit) return
          this.errors = []
          if (this.siteId.length === this.rightSiteId.length) {
            this.isErrMsg = false
            this.isBtnEnabled = true
            this.isFormValid = true
          } else {
            this.errors.push(this.errMsg)
            this.isErrMsg = true
            this.isBtnEnabled = false
            this.isFormValid = false
          }
        },
      }
    },
  }
</script>
