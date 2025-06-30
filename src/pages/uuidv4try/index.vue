<template>
  <div>
    <h1>V1 时间戳: {{ uuiddomV1 }}</h1>710ba2b8-041c-11e1-9234-0123456789ab
    <h1>V1options: {{ optionsV1 }}</h1>
    <h1>v3: mD5</h1>
    <h1>V4算法随机数: {{ uuiddomV4 }}</h1>
    <h1>V5SHA的命名空间: {{ uuiddomV4 }}</h1>
  </div>
</template>

<script>
// 引入uuid库中的v4方法，这个方法用于生成随机UUID
import { v4 as uuidv4 } from 'uuid';
import { v1 as uuidv1 } from 'uuid';
export default {
  name: 'HelloWorld',
  data () {
    return {
      uuiddomV1: '',
      optionsV1: {
        // node: Uint8Array.of(0x01, 0x23, 0x45, 0x67, 0x89, 0xab),
        // clockseq: 0x1234,
        msecs: new Date('2011-11-01').getTime(),
        nsecs: 8888,
      },
      uuiddomV4: '',
      
    }
  },
  mounted () {
    this.generateUuidV1()
    this.generateUuidV4()
  },
  methods: {
    generateUuidV1() {
      this.uuiddomV1 = uuidv1(this.optionsV1)
    },
    generateUuidV4() {
      this.uuiddomV4 = uuidv4()
    }
  }
}
</script>

<style scoped>

</style>
