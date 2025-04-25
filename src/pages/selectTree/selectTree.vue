<template>
  <div>
    <h1>树形下拉选择器</h1>
    <div style="width: 300px;margin: 0 auto;">
      <treeselect v-model="value" :multiple="true" :options="options" />
    </div>
  </div>
</template>

<script>
import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
export default {
  name: 'selectTree',
  components: {Treeselect},
  data() {
    return {
      value: null,
      options: [ {
          id: 'a',
          label: 'a',
          children: [ {
            id: 'aa',
            label: 'aa',
          }, {
            id: 'ab',
            label: 'ab',
            idDisabled: true,
          } ],
        }, {
          id: 'b',
          label: 'b',
        }, {
          id: 'c',
          label: 'c',
        } ],
    }
  }
}
</script>