<template>
  <div>
    <div @click="hopToDemo('/tableDragScroll')"><a href="#">表格拖拽滚动</a></div>
    <div @click="hopToDemo('/overflowAndabsolute')"><a href="#">绝对定位和overflow</a></div>
    <div @click="hopToDemo('/caculatePercise')"><a href="#">精确四则运算</a></div>
    <div @click="hopToDemo('/clinetIp')"><a href="#">IP</a></div>
    <div @click="hopToDemo('/gridLayout')"><a href="#">gridLayout</a></div>
    <div @click="hopToDemo('/showClientIP')"><a href="#">获取客户端信息</a></div>
    <div @click="hopToDemo('/selectTree')"><a href="#">选择器下拉树形</a></div>
    <div @click="hopToDemo('/practiceSkill')"><a href="#">测试API</a></div>
    <div @click="hopToDemo('/tablelayout')"><a href="#">测试表格排版</a></div>
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
