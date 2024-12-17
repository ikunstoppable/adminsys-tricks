<template>
  <div>
    <grid-layout
      :layout.sync="layout"
      :col-num="12"
      :row-height="30"
      :is-draggable="true"
      :is-resizable="true"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="[10, 10]"
      :use-css-transforms="true"
    >
      <grid-item
        v-for="item in layout"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :key="item.i"
      >
        {{ item.content }}
      </grid-item>
    </grid-layout>
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
        { x: 0, y: 0, w: 3, h: 6, i: "0", content: '小' },
        { x: 3, y: 0, w: 3, h: 6, i: "1", content: '' },
        { x: 6, y: 0, w: 3, h: 6, i: "2", content: '' },
        { x: 9, y: 0, w: 3, h: 6, i: "3", content: '' },
        // 第二行
        { x: 0, y: 6, w: 6, h: 6, i: "4", content: '中（横板）' },
        { x: 6, y: 6, w: 3, h: 6, i: "5", content: '' },
        { x: 9, y: 0, w: 3, h: 12, i: "6", content: '中（竖版）' },
        // 第三行
        { x: 0, y: 12, w: 9, h: 6, i: "7", content: '中（加长横板）' },
        // 第四行
        { x: 0, y: 18, w: 6, h: 12, i: "8", content: '大卡片' },
        { x: 6, y: 18, w: 6, h: 12, i: "9", content: '大卡片' },
        // 第五行
        { x: 0, y: 30, w: 9, h: 12, i: "10", content: '超大卡片' },
        { x: 9, y: 30, w: 3, h: 6, i: "11", content: '' },
        { x: 9, y: 36, w: 3, h: 6, i: "12", content: '' },
        // 第六行
        { x: 0, y: 42, w: 12, h: 6, i: "13", content: '通栏' },
      ],
    };
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