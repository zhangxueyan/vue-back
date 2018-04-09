<template>
  <div class="basetable">
   <div class="crumbs">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item><i class="el-icon-date"></i> 表单</el-breadcrumb-item>
      <el-breadcrumb-item>编辑器</el-breadcrumb-item>
    </el-breadcrumb>
  </div>

 <quill-editor v-model="content"
                ref="myQuillEditor"
                :options="editorOption">
  </quill-editor>
   <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
  </div>
</template>

<script>
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'
    import { quillEditor } from 'vue-quill-editor'
    export default {
        data: function(){
            return {
              content: '<h2>Hello BBK vueEditor</h2>',
              editorOption: {
                // some quill options
              }
            }
        },
        components: {
          quillEditor
        },
        computed: {
          editor() {
            return this.$refs.myQuillEditor.quill
          }
        },
        mounted() {
          console.log(this.editor)
        },
        methods: {
            onEditorChange({ editor, html, text }) {
                this.content = html;
            },
            submit(){
                console.log(this.content);
                this.$message.success('提交成功！');
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
