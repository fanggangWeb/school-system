<template>
<div class="aside">
  <el-menu textColor="#303133" :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" backgroundColor="#224B95" router>
    <template v-for="item in routers">
      <!-- 没有submenu -->
      <el-menu-item class="item" :key="item.path" :index="item.redirect?item.redirect:item.path+'/'+item.children[0].path" v-if="!item.hidden&&!item.noDropdown&&item.code!==roles[0]">
        <i class="el-icon-menu"></i>
        <span slot="title" class="title">{{item.name}}</span>
      </el-menu-item>
      <!-- 有submenu -->
      <el-submenu class="item" :key="item.path" v-if="!item.hidden&&item.noDropdown" :index="item.name">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title" class="title">{{item.name}}</span>
        </template>
         <el-menu-item-group>
           <!-- 子路由 -->
           <template v-for="list in item.children">
             <el-menu-item :key="list" :index="item.path+'/'+list.path" v-if="list.role!==roles[0]">
                <span slot="title" class="title">{{list.name}}</span>
             </el-menu-item>
           </template>
         </el-menu-item-group>
      </el-submenu>
    </template>
  </el-menu>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  created () {
    console.log(this.$store.getters.routers)
  },
  mounted () {
    console.log('挂载')
  },
  updated () {
    console.log('更新')
  },
  computed: {
    ...mapGetters([
      'routers',
      'roles'
    ])
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="stylus" scoped>
.aside
  background-color #224B95
  text-align left
</style>
