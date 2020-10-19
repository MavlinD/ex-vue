<template lang="pug">
  include index
</template>

<script>
  import './_index.scss'
  import SlideUpDown from 'vue-slide-up-down'

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
    },
    data() {
      return {
        siteId: '',
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
        console.log('fetch >>> ' + Math.random())
      },
      // watch: {},
      // computed: {},
    },
  }
</script>
