<template>
  <div class="sidebar">
    <el-menu class="el-menu-vertical-demo" :default-active="onRoutes" unique-opened router>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index">
           <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
           <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{subItem.title}}</el-menu-item>   
         </el-submenu>
       </template>
       <template v-else>
        <el-menu-item :index="item.index">
          <i :class="item.icon"></i>{{ item.title }}
        </el-menu-item>
      </template>
    </template>
  </el-menu>
</div>
</template>

<script>
export default {
  data() {
    return {
      message:"hello world",
      items:[
      {
        icon: 'el-icon-setting',
        index: 'readme',
        title:"自述",
      },
      {
        icon: 'el-icon-menu',
        index:'2',
        title:"表格",
        subs:[
        { 
          index:'basetable',
          title:"基础表格"
        },
        { 
          index:'vuetable',
          title:"组件表格"
        }
        ]
      },
      {
        icon: 'el-icon-date',
        index:'3',
        title:"表单",
        subs:[
        { 
          index:'baseform',
          title:"基础表单"
        },
        { 
          index:'vueeditor',
          title:"编辑器"
        },
        { 
          index:'markdown',
          title:"markdown"
        },
        { 
          index:'upload',
          title:"文件上传"
        }
        ]
      },
      {
        icon: 'el-icon-star-on',
        index: 'basecharts',
        title:"图表",
      },
      {
        icon: 'el-icon-upload2',
        index: 'draglist',
        title: '拖拽'
      }
      ]
    }
  },
  computed:{
    onRoutes(){
      return this.$route.path.replace('/','');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar{
  display: block;
  width: 250px;
  border: 1px solid #ccc;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
}
.sidebar > ul{
  height: 100%;
}
</style>
