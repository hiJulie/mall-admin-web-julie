<template>
  <div class="login-cover">
    <div class="login-center">
    </div>
    <div class="login-left">
      电商管理系统
    </div>

    <el-card class="card-box">
      <!-- 用户名及密码需要校验输入，考虑采用表单 -->
      <el-form :model="loginForm"
               :rules="loginRules"
               ref="loginForm"
               class="login-form-layout">
        <!-- 标题 -->
        <h2 class="login-title">用户登录</h2>
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input type="text"
                    placeholder="请输入用户名"
                    v-model="loginForm.username"
                    prefix-icon="el-icon-s-custom"
                    maxlength="10"
                    style="color:red">
          </el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input type="text"
                    placeholder="请输入密码"
                    v-model="loginForm.password"
                    prefix-icon="el-icon-s-claim"
                    maxlength="10"
                    show-password>
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary"
                     @click="goHome"
                     style="width:100%">登录
          </el-button>
        </el-form-item>

      </el-form>

    </el-card>

  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    const validUserName = (rule, value, callback) => {
      // 用户名可输入大小写字母
      const reg = /^[A-Za-z]+$/
      if (!value) {
        return callback(new Error('此项为必输项！'))
      }
      if (!reg.test(value)) {
        callback(new Error('请输入大写或小写英文字母！'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validUserName }],
        password: [{ required: true, trigger: 'blur', validator: validUserName }]
      }
    }
  },
  methods: {
    goHome () {
      this.$router.push('/home')
    },
    // get请求
    login () {
      const params = {
        username: this.loginForm.username,
        password: this.loginForm.password
      }
      // get请求{params:{user:'julie'}},post请求{user:'julie'}
      this.$axios.get('/api/login', { params: params }).then(res => {
        console.log(res, 'login-res')
      })
    },
    // post请求
    login1 () {
      const params = {
        username: this.loginForm.username,
        password: this.loginForm.password
      }
      // get请求{params:{user:'julie'}},post请求{user:'julie'}
      this.$axios.post('/api/loginPost', params).then(res => {
        console.log(res, 'login-res')
      })
    }
  }
}
</script>

<style scoped lang="scss">
.login-cover {
  width: 100%;
  height: 100vh;
  background: url(../assets/cover.jpg);
  position: relative;
  .login-center {
    background: #347ebc;
    width: 100%;
    height: 237px;
    opacity: 0.6;
    // 子绝父相
    position: absolute;
    top: calc(50vh - 118.5px);
  }
  .login-left {
    // 子绝父相，将子元素限制在父元素之内
    position: absolute;
    // 上下居中，左边偏移父元素的15%。必须要有宽度，绝对定位的元素宽高为内容大小
    left: 15%;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 237px;
    // 文本样式
    padding-top: 150px;
    color: #fff;
    font-size: 72px;
  }
  .card-box {
    // 子绝父相
    position: absolute;
    // 设置卡片位置：居中
    right: 15%;
    top: 0;
    bottom: 0;
    margin: auto;
    // 设置卡片大小
    height: 360px;
    width: 360px;
    .login-title {
      text-align: center;
      color: #409eff;
    }
    .el-input {
      // margin-bottom: 10px;
      /deep/ .el-input__icon {
        color: #409eff;
      }
    }
  }
}
</style>
