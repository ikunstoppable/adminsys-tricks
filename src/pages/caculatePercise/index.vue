使用第三方库实现精度精算，包含加、减、乘、除四则运算

<template>
  <div>
    <div class="cal-line-container">
        <span class="subtitle"></span>
        <span class="cal-input-item"><el-input v-model="sumDataForm.leftValue" @change="sumValueChange"/></span>
        <span>+</span>
        <span class="cal-input-item"><el-input v-model="sumDataForm.rightValue" @change="sumValueChange"/></span>
        <span>=</span>
        <span>{{ sumResultValue }}</span>
    </div>
    <!-- <div>
        <span class="subtitle"></span>
        <span><el-input value=""/></span>
        <span>+</span>
        <span><el-input value=""/></span>
        <span>+</span>
        <span><el-input value=""/></span>
    </div>
    <div>
        <span class="subtitle"></span>
        <span><el-input value=""/></span>
        <span>+</span>
        <span><el-input value=""/></span>
        <span>+</span>
        <span><el-input value=""/></span>
    </div>
    <div>
        <span class="subtitle"></span>
        <span><el-input value=""/></span>
        <span>+</span>
        <span><el-input value=""/></span>
        <span>+</span>
        <span><el-input value=""/></span>
    </div> -->
  </div>
</template>

<script>
export default {
    name: 'caculatePercise',
    data() {
        return {
            sumDataForm: {
                leftValue: 0,
                rightValue: 0,
            },
            sumResultValue: 0
        }
    },
    methods: {
        sumValueChange() {
            this.sumResultValue = Number(this.sumDataForm.leftValue) + Number(this.sumDataForm.rightValue)
        }
    }
}
</script>

<style >
.cal-line-container {
    display: flex;
    width: 100%;
    margin: 30px;
}
.cal-input-item {
    width: 400px;
}
</style>