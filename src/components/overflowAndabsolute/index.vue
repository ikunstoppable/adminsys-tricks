<template>
  <div>
    <div class="view-container">
      <div ref="firstDiv" class="first-div" :style="{ overflow: firstDivOverflow }">
          first-div
          <div ref="secondDiv" class="second-div" :style="{ overflow: secondDivOverflow }">second-div
              <div ref="thirdDiv" class="third-div">third-div</div>
          </div>
      </div>
    </div>
    <div class="">
      <button @click="leftMove">左移动third</button>
      <button @click="rightMove">右移动third</button>
      <button @click="toggleSecondOverflow">second的overflow为{{ secondDivOverflow }}</button>
      <button @click="toggleFirstOverflow">first的overflow为{{ firstDivOverflow }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      firstDivOverflow: 'hidden',
      secondDivOverflow: 'hidden'
    }
  },
  mounted () {
  },
  methods: {
    leftMove  () {
      this.$refs.thirdDiv.style.left = (this.$refs.thirdDiv.offsetLeft - 10 + 'px')
    },
    rightMove () {
      this.$refs.thirdDiv.style.left = (this.$refs.thirdDiv.offsetLeft + 10 + 'px')
    },
    toggleSecondOverflow  () {
      this.secondDivOverflow = this.secondDivOverflow === 'hidden' ? 'visible' : 'hidden'
    },
    toggleFirstOverflow () {
      this.firstDivOverflow = this.firstDivOverflow === 'hidden' ? 'visible' : 'hidden'
    }
  }
}
</script>

<style scoped>
.view-container {
  height: 1000px;
  width: 1000px;
  background-color: bisque;
  margin: 0 auto;
}

.first-div {
  height: 800px;
  width: 800px;
  background-color: chocolate;
  position: fixed;
  top: 100px;
  left: 500px;
  border: 1px black solid;
}
.second-div {
  margin: 0 auto;
  margin-top: 50px;
  height: 600px;
  width: 600px;
  background-color: green;
  position: relative;
}
.third-div {
  height: 400px;
  width: 400px;
  background-color: burlywood;
  position: absolute;
  box-shadow: 0px 0px 5px 5px #fff;
  top: 100px;
  left: -100px;
}
</style>
