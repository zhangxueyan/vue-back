<template>
  <div class="basetable">
   <div class="crumbs">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item><i class="el-icon-date"></i> 表单</el-breadcrumb-item>
      <el-breadcrumb-item>基本表单</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <div class="form-box">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="表单名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="选择器">
        <el-select v-model="form.region" placeholder="请选择">
          <el-option label="步步高" value="bubugao"></el-option>
          <el-option label="小天才" value="xiaotian"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源">
        <el-radio-group v-model="form.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg:"hello world",
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: true,
          type: ['线下主题活动'],
          resource: '线下场地免费',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        this.$message.success('提交成功!');
        console.log('submit!');
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
