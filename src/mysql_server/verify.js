/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-18 18:05:55
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-13 15:32:35
 * @FilePath: \web开发项目\shop_client\src\utils\connect-mysql.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express')
const pool = require('./mysql_connect')
// const router = express.Router()
const app = express()
let flag = true
app.get('/server/verify', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  // 获取查询参数
  console.log(req.query)
  pool.getConnection((err, connect) => {
    // 查询用户名是否已存在
    if (!err) {
      connect.query(`select id from user where username='${req.query.username}'`, function (err, data) {
        if (!err) {
          flag = false
          alert('此用户名已注册')
        } else {
          console.log('表示用户名可以使用')
        }
      })
      // 电话号码是否被占用，以及合法性
      connect.query(`select id from user where username='${req.query.numberphone}'`, function (err, data) {
        if (!err) {
          flag = false
          alert('此手机号已注册')
        }
      })
    }
    res.send(flag)
  })
})
// 关闭连接池取出的连接
pool.end()
app.listen(8023, () => {
  console.log('验证服务器已启动成功！')
})
// const sql = 'insert into user(id,username,numberphone,gender,email,address) values (?,?,?,?,?,?)'
// pool.getConnection((_err, connect) => {
//   connect.query(sql, [1, 'a', '123', '男', '1wqe', 'tpq'], (err, result) => {
//     if (err) {
//       console.log(err.message)
//     }
//     console.log(result, err)
//   })
//   connect.query('select * from user', (err, data) => {
//     // 不管是否报错，首先将连接释放
//     connect.release()
//     console.log(err, data)
//   })
// })
