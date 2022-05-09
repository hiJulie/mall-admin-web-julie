import Mock from 'mockjs'
import user from './user'

// 模拟接口，第一个参数为访问的url，第二个参数为请求方式，第三个参数为响应数据
Mock.mock('/api/userlist', 'post', user.userInfo)
