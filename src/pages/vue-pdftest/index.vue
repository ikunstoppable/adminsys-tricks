<template>
  <div>
    <pdf
			v-for="i in numPages"
			:key="i"
			:src="src"
			:page="i"
			style="display: inline-block; width: 25%"
		></pdf>
  </div>
</template>

<script>
// 引入uuid库中的v4方法，这个方法用于生成随机UUID
var loadingTask = pdf.createLoadingTask('@/assets/files/1.pdf')
import pdf from 'vue-pdf'
export default {
  name: 'vue-pdftest',
  components: {
    // pdf
  },
  data () {
    return {
      src: loadingTask,
			numPages: undefined,
    }
  },
  mounted() {
  this.src.promise.then(pdf => {
    this.numPages = pdf.numPages
  })
}
}
</script>

<style scoped>

</style>
