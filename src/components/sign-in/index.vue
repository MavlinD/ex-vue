<template lang="pug">
  include index
</template>

<script>
  import './_index.scss'
  import SlideUpDown from 'vue-slide-up-down'
  import router from '@/routes'
  import Home from '@/components/home/index.vue'

  export default {
    name: 'SignIn',
    props: {
      head: String,
      errMsg: {
        default: 'Длина поля должна быть не менее 24 символов',
      },
      minLength: { default: 3 },
    },
    components: {
      SlideUpDown,
      Home
    },
    data() {
      return {
        siteId: 'abs',
        isErrMsg: false,
        isBtnEnabled: true,
        isInit: false,
      }
    },
    methods: {
      initForm() {
        this.isInit = true
        console.log('initForm >> this.isInit: ' + this.isInit)
      },
      validate() {
        if (!this.isInit) return
        if (this.siteId.length > this.minLength) {
          this.isErrMsg = false
          this.isBtnEnabled = true
        } else {
          this.isErrMsg = true
          this.isBtnEnabled = false
        }
      },
      fetch() {
        this.initForm()
        this.validate()
        fetch('https://track-api.leadhit.io/client/test_auth', {
          method: 'get',
          headers: {
            'Api-Key': '5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo',
            'Leadhit-Site-Id': '5f8475902b0be670555f1bb3',
          },
          responseType: 'json',
        }).then(
          response => {
            console.log(response)
            response.status === 200 && localStorage.setItem('leadhit-site-id', '5f8475902b0be670555f1bb3')
            router.push({ name: 'Chart' })
          },
        ).catch(function(error) {
          console.log(error)
        })

        // console.log('fetch >>> ' + Math.random())
      },
      // watch: {},
      // computed: {},
    },
  }
</script>
