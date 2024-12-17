<template>
  <div>
    <grid-layout
      :layout.sync="layout"
      :col-num="12"
      :row-height="30"
      :is-draggable="true"
      :is-resizable="false"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="[10, 10]"
      :use-css-transforms="true"
    >
      <grid-item
        v-for="(item, index) in layout"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :key="item.i"
      >
        {{ item.content }}
        <el-button type="text" @click="setCardSize(index)">设置</el-button>
      </grid-item>
    </grid-layout>
    <el-dialog
      title="设置卡片大小"
      :visible.sync="sizeEditDialogShow"
      width="30%"
      :before-close="handleClose"
    >
      <el-select v-model="sizeEditData" placeholder="请选择">
        <el-option
          v-for="item in sizeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="confrimEditSize">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import VueGridLayout from "vue-grid-layout";
export default {
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
  },
  data() {
    return {
      layout: [
        // 第一行
        { x: 0, y: 0, w: 3, h: 6, i: "0", content: "小" },
        { x: 3, y: 0, w: 3, h: 6, i: "1", content: "" },
        { x: 6, y: 0, w: 3, h: 6, i: "2", content: "" },
        { x: 9, y: 0, w: 3, h: 6, i: "3", content: "" },
        // 第二行
        { x: 0, y: 6, w: 6, h: 6, i: "4", content: "中（横板）" },
        { x: 6, y: 6, w: 3, h: 6, i: "5", content: "" },
        { x: 9, y: 0, w: 3, h: 12, i: "6", content: "中（竖版）" },
        // 第三行
        { x: 0, y: 12, w: 9, h: 6, i: "7", content: "中（加长横板）" },
        // 第四行
        { x: 0, y: 18, w: 6, h: 12, i: "8", content: "大卡片" },
        { x: 6, y: 18, w: 6, h: 12, i: "9", content: "大卡片" },
        // 第五行
        { x: 0, y: 30, w: 9, h: 12, i: "10", content: "超大卡片" },
        { x: 9, y: 30, w: 3, h: 6, i: "11", content: "" },
        { x: 9, y: 36, w: 3, h: 6, i: "12", content: "" },
        // 第六行
        { x: 0, y: 42, w: 12, h: 6, i: "13", content: "通栏" },
      ],
      sizeEditTarget: {},
      sizeEditTargetIndex: 0,
      sizeEditDialogShow: false,
      sizeOptions: [
        { value: "SMALL", label: "小" },
        { value: "MEDIUMX", label: "中（横版）" },
        { value: "MEDIUMY", label: "中（竖版）" },
        { value: "MEDIUMLONG", label: "中（加长横版）" },
        { value: "BIG", label: "大卡片" },
        { value: "LARGE", label: "超大卡片" },
        { value: "ALLROW", label: "通栏" },
      ],
      sizeEditData: "",
      sizeMap: {
        SMALL: { w: 3, h: 6 },
        MEDIUMX: { w: 6, h: 6 },
        MEDIUMY: { w: 3, h: 12 },
        MEDIUMLONG: { w: 9, h: 6 },
        BIG: { w: 6, h: 12 },
        LARGE: { w: 9, h: 12 },
        ALLROW: { w: 12, h: 6 },
      },
    };
  },
  methods: {
    setCardSize(index) {
      const target = JSON.parse(JSON.stringify(this.layout[index]));
      this.sizeEditDialogShow = true;
      this.sizeEditTarget = target;
      this.sizeEditTargetIndex = index;
    },
    handleClose() {
      this.sizeEditDialogShow = false;
    },
    confrimEditSize() {
      const realSelected = this.sizeMap[this.sizeEditData];
      console.log(realSelected)
      this.sizeEditTarget.w = realSelected.w;
      this.sizeEditTarget.h = realSelected.h;
      this.layout.splice(this.sizeEditTargetIndex, 1, this.sizeEditTarget);
      console.log(this.layout)
      this.sizeEditDialogShow = false;
      this.$nextTick(() => {
        this.sizeEditTarget = {};
        this.sizeEditTargetIndex = 0;
      })
    },
  },
};
</script>

<style>
.vue-grid-layout {
  background: #eee;
}

.vue-grid-item:not(.vue-grid-placeholder) {
  background: #ccc;
  border: 1px solid black;
}

.vue-grid-item .resizing {
  opacity: 0.9;
}

.vue-grid-item .static {
  background: #cce;
}

.vue-grid-item .text {
  font-size: 24px;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
  width: 100%;
}

.vue-grid-item .no-drag {
  height: 100%;
  width: 100%;
}

.vue-grid-item .minMax {
  font-size: 12px;
}

.vue-grid-item .add {
  cursor: pointer;
}

.vue-draggable-handle {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 0;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>")
    no-repeat;
  background-position: bottom right;
  padding: 0 8px 8px 0;
  background-repeat: no-repeat;
  background-origin: content-box;
  box-sizing: border-box;
  cursor: pointer;
}
</style>