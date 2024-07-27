<template>
  <div class="table-container" ref="tableContainer">
    <el-table ref="tableRef" :data="tableData" border>
      <el-table-column
        prop="date"
        label="日期"
        width="280">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="280">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        width="280">
      </el-table-column>
      <el-table-column
        prop="long"
        label="身高"
        width="280">
      </el-table-column>
      <el-table-column
        prop="weight"
        label="体重">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        width="280">
      </el-table-column>
      <el-table-column
        prop="education"
        label="教育经历"
        width="280">
      </el-table-column>
      <el-table-column
        prop="workhistory"
        label="工作经历">
      </el-table-column>
      <el-table-column
        prop="bloodType"
        label="血型"
        width="280">
      </el-table-column>
      <el-table-column
        prop="gys"
        label="惯用手"
        width="280">
      </el-table-column>
      <el-table-column
        prop="eye"
        label="视力">
      </el-table-column>
      <el-table-column
        prop="hear"
        label="听力"
        width="280">
      </el-table-column>
      <el-table-column
        prop="didsm"
        label="是否色盲"
        width="280">
      </el-table-column>
      <el-table-column
        prop="beizhu"
        label="备注">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        age: '上海市普陀区金沙江路',
        long: '上海市普陀区金沙江路',
        weight: '上海市普陀区金沙江路',
        sex: '上海市普陀区金沙江路',
        education: '上海市普陀区金沙江路',
        workhistory: '上海市普陀区金沙江路',
        bloodType: '上海市普陀区金沙江路',
        gys: '上海市普陀区金沙江路',
        eye: '上海市普陀区金沙江路',
        hear: '上海市普陀区金沙江路',
        didsm: '上海市普陀区金沙江路',
        beizhu: '上海市普陀区金沙江路'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        age: '上海市普陀区金沙江路',
        long: '上海市普陀区金沙江路',
        weight: '上海市普陀区金沙江路',
        sex: '上海市普陀区金沙江路',
        education: '上海市普陀区金沙江路',
        workhistory: '上海市普陀区金沙江路',
        bloodType: '上海市普陀区金沙江路',
        gys: '上海市普陀区金沙江路',
        eye: '上海市普陀区金沙江路',
        hear: '上海市普陀区金沙江路',
        didsm: '上海市普陀区金沙江路',
        beizhu: '上海市普陀区金沙江路'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        age: '上海市普陀区金沙江路',
        long: '上海市普陀区金沙江路',
        weight: '上海市普陀区金沙江路',
        sex: '上海市普陀区金沙江路',
        education: '上海市普陀区金沙江路',
        workhistory: '上海市普陀区金沙江路',
        bloodType: '上海市普陀区金沙江路',
        gys: '上海市普陀区金沙江路',
        eye: '上海市普陀区金沙江路',
        hear: '上海市普陀区金沙江路',
        didsm: '上海市普陀区金沙江路',
        beizhu: '上海市普陀区金沙江路'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        age: '上海市普陀区金沙江路',
        long: '上海市普陀区金沙江路',
        weight: '上海市普陀区金沙江路',
        sex: '上海市普陀区金沙江路',
        education: '上海市普陀区金沙江路',
        workhistory: '上海市普陀区金沙江路',
        bloodType: '上海市普陀区金沙江路',
        gys: '上海市普陀区金沙江路',
        eye: '上海市普陀区金沙江路',
        hear: '上海市普陀区金沙江路',
        didsm: '上海市普陀区金沙江路',
        beizhu: '上海市普陀区金沙江路'
      }]
    }
  },
  mounted () {
    this.enableDrag()
  },
  methods: {
    enableDrag () {
      this.$nextTick(() => {
        // const tableContainer = this.$refs.tableContainer
        const tableBodyWrapper = this.$refs.tableRef.$el.querySelector('.el-table__body-wrapper')
        if (!tableBodyWrapper) {
          console.error('找不到表体。')
          return
        }

        let isDown = false
        let startX, scrollLeft
        // pageX 点击位置距离视窗的横向距离
        // scrollLeft 已经滚动了的横向相对长度（相对于父元素横向移动的数值）
        tableBodyWrapper.addEventListener('mousedown', (e) => {
          isDown = true
          startX = e.pageX - tableBodyWrapper.offsetLeft
          scrollLeft = tableBodyWrapper.scrollLeft
          tableBodyWrapper.style.cursor = 'grabbing'
          // console.log(tableBodyWrapper.offsetLeft)
          // console.log(e)
          // console.log(tableBodyWrapper.scrollLeft)
        })

        tableBodyWrapper.addEventListener('mouseleave', () => {
          isDown = false
          tableBodyWrapper.style.cursor = 'grab'
        })

        tableBodyWrapper.addEventListener('mouseup', () => {
          isDown = false
          tableBodyWrapper.style.cursor = 'grab'
        })

        tableBodyWrapper.addEventListener('mousemove', (e) => {
          if (!isDown) return
          e.preventDefault()
          const x = e.pageX - tableBodyWrapper.offsetLeft
          const walk = (x - startX) * 1 // scroll-fast
          tableBodyWrapper.scrollLeft = scrollLeft - walk
          console.log(e.pageX)
        })

        // 隐藏滚动条
        tableBodyWrapper.style.overflowX = 'hidden'
      })
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
