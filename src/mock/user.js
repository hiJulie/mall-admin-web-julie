import Mock from 'mockjs'

// 模拟用户数据
const userInfo = function () {
  const user = Mock.mock({
    'userList|1-20': [{
      'userId|+1': 0,
      'userName|+1': ['admin', 'zhangsan', 'lisi'],
      'password|+1': ['123456', 'qwer', 'qaz']
    }]
  })
  return user
}

export default userInfo
