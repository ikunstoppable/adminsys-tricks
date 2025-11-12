<template>
  <div class="table-container">
    <!-- 可垂直滚动的表格区域 -->
    <div class="search-form">搜索区域</div>
    <div class="charts-form">驾驶舱区域</div>
    <div ref="tableWrapper" class="table-wrapper">
      <el-table :data="tableData" border class="custom-table" style="width: auto">
        <el-table-column
          v-for="(item,index) in columns"
          :key="item.prop+index"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
        />
        <el-table-column
          :label="操作"
          :width="100"
          fixed="right"
        >
          <template>
            <el-button type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
    </el-table-column>
      </el-table>
    </div>

    <!-- 固定在容器底部的横向滚动条 -->
    <div class="scroll-x" ref="scrollX" @scroll="syncScrollFromBottom">
        <span>横向滚动条滚动示意区域</span>
      <div ref="scrollInner" class="scroll-inner"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tableLayout',
  mounted() {
    this.$nextTick(() => {
      this.updateScrollWidth()
      this.$el.querySelector('.el-table__body-wrapper').addEventListener('scroll', this.syncScrollFromTable)
    })
  },
  beforeDestroy() {
    this.$el.querySelector('.el-table__body-wrapper').removeEventListener('scroll', this.syncScrollFromTable)
  },
  methods: {
    updateScrollWidth() {
      const table = this.$el.querySelector('.el-table__body-wrapper table')
      if (table) {
        this.$refs.scrollInner.style.width = table.scrollWidth + 'px'
        console.log('.el-table__body-wrapper table srollwidth' + table.scrollWidth)
      }
    },
    syncScrollFromBottom(e) {
      const bodyWrapper = this.$el.querySelector('.el-table__body-wrapper')
      bodyWrapper.scrollLeft = e.target.scrollLeft
    },
    syncScrollFromTable(e) {
      this.$refs.scrollX.scrollLeft = e.target.scrollLeft
    },
  },
  data() {
    return {
      columns: [
        { prop: 'a', label: '列A', width: 200 },
        { prop: 'b', label: '列B', width: 200 },
        { prop: 'c', label: '列C', width: 200 },
        { prop: 'd', label: '列D', width: 200 },
        { prop: 'e', label: '列E', width: 200 },
        { prop: 'f', label: '列F', width: 200 },
        { prop: 'g', label: '列G', width: 200 },
        { prop: 'a', label: '列A', width: 200 },
        { prop: 'b', label: '列B', width: 200 },
        { prop: 'c', label: '列C', width: 200 },
        { prop: 'd', label: '列D', width: 200 },
        { prop: 'e', label: '列E', width: 200 },
        { prop: 'f', label: '列F', width: 200 },
        { prop: 'g', label: '列G', width: 200 },
        { prop: 'a', label: '列A', width: 200 },
        { prop: 'b', label: '列B', width: 200 },
        { prop: 'c', label: '列C', width: 200 },
        { prop: 'd', label: '列D', width: 200 },
        { prop: 'e', label: '列E', width: 200 },
        { prop: 'f', label: '列F', width: 200 },
        { prop: 'g', label: '列G', width: 200 },
        { prop: 'a', label: '列A', width: 200 },
        { prop: 'b', label: '列B', width: 200 },
        { prop: 'c', label: '列C', width: 200 },
        { prop: 'd', label: '列D', width: 200 },
        { prop: 'e', label: '列E', width: 200 },
        { prop: 'f', label: '列F', width: 200 },
        { prop: 'g', label: '列G', width: 200 },
      ],
      tableData: Array.from({ length: 200 }).map((v, i) => ({
        a: 'A' + i,
        b: 'B' + i,
        c: 'C' + i,
        d: 'D' + i,
        e: 'E' + i,
        f: 'F' + i,
        g: 'G' + i,
      })),
    }
  },
}
</script>

<style scoped>
.table-container {
  position: relative;
  /* height:200px; 可自定义，高度即可控表格可视范围 */
  border: 1px solid #ddd;
  padding: 20px; /* 给底部滚动条留位置 */
}
/* 搜索区域 */
.search-form {
    width: 100%;
    height: 200px;
    background-color: lightpink;
}
.charts-form {
    width: 100%;
    height: 200px;
    background-color: lightcyan;
}
/* 表格区域只负责纵向滚动 */
.table-wrapper .el-table__body-wrapper {
  max-height: 100%;
  overflow-y: auto;  /* 因为没设置全屏高度，所以此项设置实际不会产生效果 */
  overflow-x: hidden !important;
}

/* 横向滚动条固定在容器底部 */

.scroll-x {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-x: auto;
  overflow-y: hidden;
  height: 30px;
  background: lightblue;
  border-top: 1px solid #ddd;
  z-index: 9999;
}

.scroll-inner {
  height: 1px;
}
/* 父组件传值用对象引用，多尺寸显示，路由hashhistory */
</style>