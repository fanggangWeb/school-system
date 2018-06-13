<template>
  <div class="navbar">
    <img src="./logo.png" alt="">
    <el-dropdown class="el-dropdown">
      <span class="el-dropdown-link">
        <img class="avatar" :src="avatar"/>
        {{name}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
        <el-dropdown-item @click.native="logout">注销</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'name',
      'avatar'
    ])
  },
  methods: {
    logout () {
      this.$store.dispatch('FedLogout').then(() => {
        console.log('退出登录')
        this.$router.push({path: '/login'})
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.navbar
  box-sizing border-box
  height 100%
  text-align right
  background #224B95
  width 100%
  border 5px #003086 solid
  img
    float left
    margin 20px 0 0 30px
  .el-dropdown
    height 60px
    line-height 60px
    color #ffffff
    .el-dropdown-link
      cursor pointer
      .avatar
        width 30px
        height 30px
        display inline-block
        vertical-align top
        margin-top 15px
        border-radius 50%
</style>
