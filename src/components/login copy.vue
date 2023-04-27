<template>
  <div class="login-cover">
    <el-button type="primary"
               @click="goHome1"
               style="width:100%">登录</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    // get请求
    goHome () {
      const params = {
        username: 'julie',
        password: '123456'
      }
      // get请求{params:{user:'julie'}},post请求{user:'julie'}
      this.$axios.get('/api/login', { params: params }).then(res => {
        console.log(res, 'login-res')
      })
    },
    // post请求
    goHome1 () {
      const params = {
        username: 'julie',
        password: '123456'
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
</style>
