<template>
  <div class="all-page-container">
    <!-- <div class="mini-container">驾驶舱站位</div>
    <div class="searchform-contaienr">搜索框站位</div> -->
    <div class="table-container">
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
            prop="date"
            label="日期"
            width="180">
            </el-table-column>
            <el-table-column
            prop="name"
            label="姓名"
            width="180">
            </el-table-column>
            <el-table-column
            prop="address"
            label="地址">
            </el-table-column>
            <el-table-column
            prop="date1"
            label="日期1"
            width="180">
            </el-table-column>
            <el-table-column
            prop="name1"
            label="姓名1"
            width="180">
            </el-table-column>
            <el-table-column
            prop="address1"
            label="地址1">
            </el-table-column>
            <el-table-column
            prop="date2"
            label="日期2"
            width="180">
            </el-table-column>
            <el-table-column
            prop="name2"
            label="姓名2"
            width="180">
            </el-table-column>
            <el-table-column
            prop="address2"
            label="地址2">
            </el-table-column>
            <el-table-column
            prop="date3"
            label="日期3"
            width="180">
            </el-table-column>
            <el-table-column
            prop="name4"
            label="姓名4"
            width="180">
            </el-table-column>
            <el-table-column
            prop="address4"
            label="地址4">
            </el-table-column>
            <el-table-column
            prop="name4"
            label="姓名4"
            width="180">
            </el-table-column>
            <el-table-column
            prop="address4"
            label="操作">
            </el-table-column>
        </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tableLayout',
  data () {
    return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          date1: '2016-05-02',
          name1: '王小虎',
          address1: '上海市普陀区金沙江路 1518 弄',
          date2: '2016-05-02',
          name2: '王小虎',
          address2: '上海市普陀区金沙江路 1518 弄',
          date3: '2016-05-02',
          name3: '王小虎',
          address3: '上海市普陀区金沙江路 1518 弄',
          date4: '2016-05-02',
          name4: '王小虎',
          address4: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          date1: '2016-05-02',
          name1: '王小虎',
          address1: '上海市普陀区金沙江路 1518 弄',
          date2: '2016-05-02',
          name2: '王小虎',
          address2: '上海市普陀区金沙江路 1518 弄',
          date3: '2016-05-02',
          name3: '王小虎',
          address3: '上海市普陀区金沙江路 1518 弄',
          date4: '2016-05-02',
          name4: '王小虎',
          address4: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          date1: '2016-05-02',
          name1: '王小虎',
          address1: '上海市普陀区金沙江路 1518 弄',
          date2: '2016-05-02',
          name2: '王小虎',
          address2: '上海市普陀区金沙江路 1518 弄',
          date3: '2016-05-02',
          name3: '王小虎',
          address3: '上海市普陀区金沙江路 1518 弄',
          date4: '2016-05-02',
          name4: '王小虎',
          address4: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          date1: '2016-05-02',
          name1: '王小虎',
          address1: '上海市普陀区金沙江路 1518 弄',
          date2: '2016-05-02',
          name2: '王小虎',
          address2: '上海市普陀区金沙江路 1518 弄',
          date3: '2016-05-02',
          name3: '王小虎',
          address3: '上海市普陀区金沙江路 1518 弄',
          date4: '2016-05-02',
          name4: '王小虎',
          address4: '上海市普陀区金沙江路 1518 弄',
        },{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          date1: '2016-05-02',
          name1: '王小虎',
          address1: '上海市普陀区金沙江路 1518 弄',
          date2: '2016-05-02',
          name2: '王小虎',
          address2: '上海市普陀区金沙江路 1518 弄',
          date3: '2016-05-02',
          name3: '王小虎',
          address3: '上海市普陀区金沙江路 1518 弄',
          date4: '2016-05-02',
          name4: '王小虎',
          address4: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          date1: '2016-05-02',
          name1: '王小虎',
          address1: '上海市普陀区金沙江路 1518 弄',
          date2: '2016-05-02',
          name2: '王小虎',
          address2: '上海市普陀区金沙江路 1518 弄',
          date3: '2016-05-02',
          name3: '王小虎',
          address3: '上海市普陀区金沙江路 1518 弄',
          date4: '2016-05-02',
          name4: '王小虎',
          address4: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          date1: '2016-05-02',
          name1: '王小虎',
          address1: '上海市普陀区金沙江路 1518 弄',
          date2: '2016-05-02',
          name2: '王小虎',
          address2: '上海市普陀区金沙江路 1518 弄',
          date3: '2016-05-02',
          name3: '王小虎',
          address3: '上海市普陀区金沙江路 1518 弄',
          date4: '2016-05-02',
          name4: '王小虎',
          address4: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          date1: '2016-05-02',
          name1: '王小虎',
          address1: '上海市普陀区金沙江路 1518 弄',
          date2: '2016-05-02',
          name2: '王小虎',
          address2: '上海市普陀区金沙江路 1518 弄',
          date3: '2016-05-02',
          name3: '王小虎',
          address3: '上海市普陀区金沙江路 1518 弄',
          date4: '2016-05-02',
          name4: '王小虎',
          address4: '上海市普陀区金沙江路 1518 弄',
        },{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          date1: '2016-05-02',
          name1: '王小虎',
          address1: '上海市普陀区金沙江路 1518 弄',
          date2: '2016-05-02',
          name2: '王小虎',
          address2: '上海市普陀区金沙江路 1518 弄',
          date3: '2016-05-02',
          name3: '王小虎',
          address3: '上海市普陀区金沙江路 1518 弄',
          date4: '2016-05-02',
          name4: '王小虎',
          address4: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          date1: '2016-05-02',
          name1: '王小虎',
          address1: '上海市普陀区金沙江路 1518 弄',
          date2: '2016-05-02',
          name2: '王小虎',
          address2: '上海市普陀区金沙江路 1518 弄',
          date3: '2016-05-02',
          name3: '王小虎',
          address3: '上海市普陀区金沙江路 1518 弄',
          date4: '2016-05-02',
          name4: '王小虎',
          address4: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          date1: '2016-05-02',
          name1: '王小虎',
          address1: '上海市普陀区金沙江路 1518 弄',
          date2: '2016-05-02',
          name2: '王小虎',
          address2: '上海市普陀区金沙江路 1518 弄',
          date3: '2016-05-02',
          name3: '王小虎',
          address3: '上海市普陀区金沙江路 1518 弄',
          date4: '2016-05-02',
          name4: '王小虎',
          address4: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          date1: '2016-05-02',
          name1: '王小虎',
          address1: '上海市普陀区金沙江路 1518 弄',
          date2: '2016-05-02',
          name2: '王小虎',
          address2: '上海市普陀区金沙江路 1518 弄',
          date3: '2016-05-02',
          name3: '王小虎',
          address3: '上海市普陀区金沙江路 1518 弄',
          date4: '2016-05-02',
          name4: '王小虎',
          address4: '上海市普陀区金沙江路 1518 弄',
        },{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          date1: '2016-05-02',
          name1: '王小虎',
          address1: '上海市普陀区金沙江路 1518 弄',
          date2: '2016-05-02',
          name2: '王小虎',
          address2: '上海市普陀区金沙江路 1518 弄',
          date3: '2016-05-02',
          name3: '王小虎',
          address3: '上海市普陀区金沙江路 1518 弄',
          date4: '2016-05-02',
          name4: '王小虎',
          address4: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          date1: '2016-05-02',
          name1: '王小虎',
          address1: '上海市普陀区金沙江路 1518 弄',
          date2: '2016-05-02',
          name2: '王小虎',
          address2: '上海市普陀区金沙江路 1518 弄',
          date3: '2016-05-02',
          name3: '王小虎',
          address3: '上海市普陀区金沙江路 1518 弄',
          date4: '2016-05-02',
          name4: '王小虎',
          address4: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          date1: '2016-05-02',
          name1: '王小虎',
          address1: '上海市普陀区金沙江路 1518 弄',
          date2: '2016-05-02',
          name2: '王小虎',
          address2: '上海市普陀区金沙江路 1518 弄',
          date3: '2016-05-02',
          name3: '王小虎',
          address3: '上海市普陀区金沙江路 1518 弄',
          date4: '2016-05-02',
          name4: '王小虎',
          address4: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          date1: '2016-05-02',
          name1: '王小虎',
          address1: '上海市普陀区金沙江路 1518 弄',
          date2: '2016-05-02',
          name2: '王小虎',
          address2: '上海市普陀区金沙江路 1518 弄',
          date3: '2016-05-02',
          name3: '王小虎',
          address3: '上海市普陀区金沙江路 1518 弄',
          date4: '2016-05-02',
          name4: '王小虎',
          address4: '上海市普陀区金沙江路 1518 弄',
        },{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          date1: '2016-05-02',
          name1: '王小虎',
          address1: '上海市普陀区金沙江路 1518 弄',
          date2: '2016-05-02',
          name2: '王小虎',
          address2: '上海市普陀区金沙江路 1518 弄',
          date3: '2016-05-02',
          name3: '王小虎',
          address3: '上海市普陀区金沙江路 1518 弄',
          date4: '2016-05-02',
          name4: '王小虎',
          address4: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          date1: '2016-05-02',
          name1: '王小虎',
          address1: '上海市普陀区金沙江路 1518 弄',
          date2: '2016-05-02',
          name2: '王小虎',
          address2: '上海市普陀区金沙江路 1518 弄',
          date3: '2016-05-02',
          name3: '王小虎',
          address3: '上海市普陀区金沙江路 1518 弄',
          date4: '2016-05-02',
          name4: '王小虎',
          address4: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          date1: '2016-05-02',
          name1: '王小虎',
          address1: '上海市普陀区金沙江路 1518 弄',
          date2: '2016-05-02',
          name2: '王小虎',
          address2: '上海市普陀区金沙江路 1518 弄',
          date3: '2016-05-02',
          name3: '王小虎',
          address3: '上海市普陀区金沙江路 1518 弄',
          date4: '2016-05-02',
          name4: '王小虎',
          address4: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          date1: '2016-05-02',
          name1: '王小虎',
          address1: '上海市普陀区金沙江路 1518 弄',
          date2: '2016-05-02',
          name2: '王小虎',
          address2: '上海市普陀区金沙江路 1518 弄',
          date3: '2016-05-02',
          name3: '王小虎',
          address3: '上海市普陀区金沙江路 1518 弄',
          date4: '2016-05-02',
          name4: '王小虎',
          address4: '上海市普陀区金沙江路 1518 弄',
        }]
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped>
.all-page-container{
    padding: 0px 20px;
}
.mini-container{
    width: 100%;
    background-color: blanchedalmond;
    height: 200px;
}

.searchform-contaienr {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: cadetblue;
    height: 100px;
}
.table-container {
    padding-top: 10px;
}
</style>
