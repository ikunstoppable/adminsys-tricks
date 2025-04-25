<template>
  <div>
    window可通过addeventlistener绑定同名函数，并会按照绑定顺序依次执行
  </div>
</template>

<script>
import { debounce } from 'lodash'
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  mounted () {
    this.multiAddEventToWindow()
  },
  methods: {
    multiAddEventToWindow () {
      window.addEventListener('resize', this.resizeCore1)
      window.addEventListener('resize', this.resizeCore2)
    },
    resizeCore1: debounce(() =>{
      console.log('resize 1 exist')
    }, 500),
    resizeCore2: debounce(() => {
      console.log('resize 2 is ready')
    }, 1000)
  }
}
</script>

<style scoped>

</style>
