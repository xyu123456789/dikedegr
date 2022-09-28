<template>
  <div class="login-container">
    <div class="box">
      <img src="@/assets/帝可得图片/common/logo.png" alt="">
      <el-form :model="loginForm" :rules="rules">
        <!-- 账号 -->
        <el-form-item prop="mobile">
          <span class="svg-container el-icon-mobile icon" />
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号码" />
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <span class="svg-container el-icon-lock icon" />
          <el-input ref="pwd" v-model="loginForm.password" placeholder="请输入密码" :type="passwordType" />
          <span class="les" @click="showpwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item prop="code">
          <span class="svg-container el-icon-setting icon" />
          <el-input v-model="loginForm.code" placeholder="请输入验证码" />
          <span @click="queryCodeImage">
            <img :src="loginImage" alt="" class="img">
          </span>
        </el-form-item>
        <el-button type="primary" class="loginBtn" :loading="loading" @click="login">登入</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
// login,
import { loginUserImageCode } from '@/api/login'
export default {
  name: 'Login',
  data() {
    return {
      loginImage: require('@/assets/帝可得图片/common/background.png'),
      passwordType: 'password',
      loginForm: {
        mobile: '',
        password: '',
        code: '',
        clientToken: '',
        loginType: 0
      },
      token: '',
      rules: {
        mobile: [
          {
            required: true,
            message: '请填写手机号码',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ],
        code: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      },
      loading: false
    }
  },
  methods: {

    // 获取验证码
    async queryCodeImage() {
      const uuid = Math.floor(Math.random() * 9999) + 1
      const { data } = await loginUserImageCode(uuid)
      this.loginImage = window.URL.createObjectURL(data)
      console.log(this.loginImage)
    },
    showpwd() {
      this.passwordType === 'password'
        ? (this.passwordType = '')
        : (this.passwordType = 'password')
      this.$nextTick(() => {
        this.$refs.pwd.focus()
      })
    },
    async login() {
      try {
        // await this.$refs.loginForm
        this.loading = true
        await this.$store.dispatch('user/loginAction', this.loginForm)
        // 接口请求
        this.$router.push('/')
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style  lang="scss">
$dark_gray: #889aa4;
$bg: #d4e3ff;
$light_gray: #68b0fe;
$cursor: #fff;

.login-container {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-image: url(~@/assets/帝可得图片/common/background.png);
  background-repeat: no-repeat;
  background-size: cover;

  .box {
    position: absolute;
    width: 518px;
    height: 388px;
    top: 50%;
    left: 50%;
    margin-top: -194px;
    margin-left: -259px;
    padding: 76px 35px 0;
    background: #fff;
    -webkit-box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    border-radius: 10px;

    img {
      position: absolute;
      width: 96px;
      height: 96px;
      top: -46px;
      left: 50%;
      margin-left: -48px;
      z-index: 3;
    }

    .el-form {
      width: 448px;
      height: 280px;

      // background-color: red;
      .el-form-item {
        position: relative;
        border: 1px solid #999;
        border-radius: 5px;

        .svg-container {
          padding: 6px 5px 6px 15px;
          color: $dark_gray;
          vertical-align: middle;
          width: 30px;
          font-size: 20px;
          display: inline-block;
        }

        .les {
          padding: 6px 5px 6px 12px;
        }

        .img {
          position: absolute;
          width: 132px;
          height: 52px;
          top: 0;
          left: 81.5%;
          z-index: 0;
          border: 1px solid green;
        }

        .el-input {
          display: inline-block;
          height: 52px;
          width: 85%;

          input {
            width: 75%;
            background: transparent;
            border: 0px;
            -webkit-appearance: none;
            border-radius: 0px;
            padding: 12px 5px 12px 15px;
            color: $light_gray;
            height: 52px;
            caret-color: $cursor;

            &:-webkit-autofill {
              box-shadow: 0 0 0px 1000px $bg inset !important;
              -webkit-text-fill-color: $cursor !important;
            }
          }
        }
      }

      .loginBtn {
        background: linear-gradient(262deg, #2e50e1, #6878f0);
        width: 448px;
        height: 52px;
        box-sizing: border-box;
        cursor: pointer;
        font-size: 18px;
        color: #fff;
        border-radius: 10px;
        border: none;
      }
    }
  }
}
</style>
