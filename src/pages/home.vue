<template>
  <div>
    <div @click="hopToDemo('/tableDragScroll')"><a href="#">表格拖拽滚动</a></div>
    <div @click="hopToDemo('/overflowAndabsolute')"><a href="#">绝对定位和overflow</a></div>
    <div @click="hopToDemo('/caculatePercise')"><a href="#">精确四则运算</a></div>
    <div @click="hopToDemo('/clinetIp')"><a href="#">IP</a></div>
    <div @click="hopToDemo('/gridLayout')"><a href="#">gridLayout</a></div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    hopToDemo (path) {
      this.$router.push(path)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table-container {
  width: 1024px;
  margin-left: 1000px;
}
* {
    margin: 0;
    padding: 0;
    border:0;
  }
</style>
