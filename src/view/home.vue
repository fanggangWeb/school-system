<template>
<el-container style="height:100%">
  <el-header style="padding:0;">
    <header-oa></header-oa>
  </el-header>
  <el-container>
    <el-aside style="background:#224B95;width:120pt">
      <aside-oa></aside-oa>
    </el-aside>
    <el-main>
      <main-oa></main-oa>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import mainOa from '@/view/layout/main'
import asideOa from '@/view/layout/aside'
import headerOa from '@/view/layout/header'
export default {
  components: {
    mainOa, asideOa, headerOa
  }
}
</script>
<style lang="stylus" scoped>

</style>
