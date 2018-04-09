<template>
  <div class="basetable">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-date"></i> 表单</el-breadcrumb-item>
        <el-breadcrumb-item>markdown</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <markdown-editor preview-class="markdown-body" v-model="content" :configs="configs" ref="markdownEditor"></markdown-editor>
  </div>
</template>

<script>
  import { markdownEditor } from 'vue-simplemde';
  import 'github-markdown-css'
  import 'simplemde/dist/simplemde.min.css';
  export default {
    data: function(){
            return {
                content:'',
                configs: {
                    status: true,
                    initialValue: 'Hello BBK markDown',
                    renderingConfig: {
                        codeSyntaxHighlighting: true,
                        highlightingTheme: 'atom-one-light'
                    }
                }
            }
    },
    components: {
      markdownEditor
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import 'simplemde/dist/simplemde.min.css';
 @import 'github-markdown-css';*/
</style>
