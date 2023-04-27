var Mock = require('mockjs')
var data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|1-10': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1
  }]
})
// 输出结果
console.log(JSON.stringify(data, null, 4))

// 有需要接受的参数要使用正则匹配
// /api/login?username=rr&password=ttt
Mock.mock(/\/api\/login/, 'get', (options) => {
  // 如果是get请求
  const url = options.url
  return {
    status: 200,
    message: '登录成功！',
    data: url
  }
})

Mock.mock('/api/loginPost', 'post', (options) => {
  // 如果是post请求
  // 获取调用这个接口传入的参数，需要将字符串转换成JSON对象格式
  const body = JSON.parse(options.body)
  return {
    status: 200,
    message: '登录成功！',
    data: body
  }
})
