<template>
  <div class="table-container">
    <!-- 可垂直滚动的表格区域 -->
    <div ref="tableWrapper" class="table-wrapper">
      <el-table :data="tableData" border class="custom-table" style="width: auto">
        <el-table-column
          v-for="(item,index) in columns"
          :key="item.prop+index"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
        />
      </el-table>
    </div>

    <!-- 固定在容器底部的横向滚动条 -->
    <div class="scroll-x" ref="scrollX" @scroll="syncScrollFromBottom">
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
  height: 600px; /* 可自定义，高度即可控表格可视范围 */
  border: 1px solid #ddd;
  padding-bottom: 20px; /* 给底部滚动条留位置 */
}

/* 表格区域只负责纵向滚动 */
.table-wrapper .el-table__body-wrapper {
  max-height: 100%;
  overflow-y: auto;
  overflow-x: hidden !important;
}

/* 横向滚动条固定在容器底部 */
.scroll-x {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-x: auto;
  overflow-y: hidden;
  height: 16px;
  background: #f7f7f7;
  border-top: 1px solid #ddd;
}

.scroll-inner {
  height: 1px;
}
</style>