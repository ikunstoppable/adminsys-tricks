<template>
  <div>
    {{ uuiddom }}
  </div>
</template>

<script>
// 引入uuid库中的v4方法，这个方法用于生成随机UUID
import { v4 as uuidv4 } from 'uuid';
export default {
  name: 'HelloWorld',
  data () {
    return {
      uuiddom: ''
    }
  },
  mounted () {
    this.generateUuid()
  },
  methods: {
    generateUuid() {
      this.uuiddom = uuidv4()
    }
  }
}
</script>

<style scoped>

</style>
