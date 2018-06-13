<template>
  <div class="login-container">
    <el-form  :model="login" class="login-form" ref="login" label-position="left" :rules="rules">
      <h2 class="title">迎新管理系统</h2>
      <div class="container">
        <img class="logo" src="./logo.png" alt="">
        <el-form-item prop="name">
          <i class="icon iconfont icon-user"></i>
          <el-input v-model="login.name" type="text" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <i class="icon iconfont icon-mima"></i>
          <el-input v-model="login.password" type="password" auto-complete="off" @keyup.enter.native="handleLogin"></el-input>
        </el-form-item>
        <el-form-item>
        <el-button type="primary" class="login-btn" style="width:100%" @click.native="handleLogin" :loading="loading">登陆</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      login: {
        name: '',
        password: ''
      },
      loading: false,
      rules: {
        name: [{required: true, message: '请输入用户名', trigger: 'blur'}],
        password: [{required: true, message: '请输入密码', trigger: 'blur'}]
      }
    }
  },
  methods: {
    handleLogin () {
      this.$refs.login.validate((valid) => {
        // 通过正则验证
        if (valid) {
          this.loading = true
          this.Login(this.login).then(res => {
            this.loading = false
            if (res) {
              // 登录成功
              this.$router.push('/')
            } else {
              this.MessageError('用户名或者密码错误')
            }
          })
        }
      })
    },
    ...mapActions([
      'Login'
    ])
  }
}
</script>

<style lang="stylus" scoped>
  .login-container
    height 100vh
    background #EFEFEF
    .login-form
      width 400px
      position absolute
      left 0
      right 0
      width 560px
      margin 100px auto 0 
      .title 
        font-size 50px
        color: black
        margin 0px auto 40px auto
        text-align center
        font-weight normal
        letter-spacing 5px
      .container
        padding 40px
        background-color white
        .logo
          margin-bottom 40px
          margin-left calc(50% - 77px)
      .item
        border 1px solid rgba(255, 255, 255, 0.1)
        background rgba(0, 0, 0, 0.1)
        border-radius 5px
        color #454545
        .input
          display inline-block
          height 47px
          width 85%
          border none
          background transparent
        &>>>input
          background transparent
          border 0px
          -webkit-appearance none
          border-radius 0px
          padding 12px 5px 12px 15px
          height 47px
          &:-webkit-autofill
            -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important
            -webkit-text-fill-color: #fff !important
</style>
