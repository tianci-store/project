/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-28 00:06:42
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-09 22:44:13
 * @FilePath: \web开发项目\shop_client\src\mysql_server\register.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%A
 */
const express = require('express')
const pool = require('./mysql_connect')
const app = express()

let flag = true
let sum = 0
app.get('/server/register', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  let qdata = [sum, req.query.username, req.query.password, req.query.numberphone, req.query.gender, req.query.email, req.query.address, 'false']
  // 测试查询传递的参数
  console.log(req.query)
  pool.getConnection((err, connect) => {
    if (!err) {
      console.log('数据库连接成功！')
      connect.query('select count(id) as count from user', (err, data) => {
        if (!err) {
          const result = JSON.parse(JSON.stringify(data))
          console.log(result[0].count)
          sum = result[0].count
          qdata = [sum + 1, req.query.username, req.query.password, req.query.numberphone, req.query.gender, req.query.email, req.query.address, 'false']
        }
      })
      connect.query(`select id from user where username='${req.query.username}'`, function (err2, _data) {
        if (err2) {
          flag = false
          console.log('此用户名已注册')
        } else {
          console.log('用户名可以使用')
        }
      })
      // 电话号码是否被占用，以及合法性
      connect.query(`select id from user where username='${req.query.numberphone}'`, function (err3, _data) {
        if (err3) {
          flag = false
          console.log('此手机号已注册')
        }
        if (flag) {
          console.log(flag)
          connect.query('insert into user values (?,?,?,?,?,?,?,?)', qdata, (err4, data) => {
            console.log(err4)
            if (!err4) {
              res.send('注册成功')
              console.log('数据插入成功!')
            }
          })
        } else {
          console.log('注册失败！')
          res.send('注册失败！')
        }
      })
    }
  })
})

app.listen(8023, () => {
  console.log('注册服务器已启动！')
})
