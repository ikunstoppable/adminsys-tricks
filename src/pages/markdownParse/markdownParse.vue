<template>
  <div>
    <div class="display-container">
      <vueMarkdown :source="mdsource"/>
    </div>

    <textarea class="input-container" name="" id="" v-model="markdownRaw"></textarea>
    <div class="input-dis-container" v-html="markdownToHtml"></div>
  </div>
</template>

<script>
import vueMarkdown  from 'vue-markdown';
import {marked} from 'marked';
export default {
  components: {
    vueMarkdown,
  },
  data() {
    return {
      mdsource: "# Hello World\n\nThis is a **Markdown** renderer.\n # 一号标题\n ## 二号标题",
      markdownRaw: 'input markdown raw'
    }
  },
  computed: {
    markdownToHtml() {
      return marked.parse(this.markdownRaw)
    },
  },
}
</script>

<style scoped>
.display-container {
  width: 600px;
  height: 100px;
  border: 1px solid;
  margin: 15px;
}
.input-container {
  width: 300px;
  height: 100px;
  border: 1px solid;
}

.input-dis-container {
  width: 600px;
  height: 100px;
  border: 1px solid;
  margin: 15px;
}
</style>