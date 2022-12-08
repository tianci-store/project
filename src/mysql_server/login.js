/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-05 22:25:55
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-13 14:59:58
 * @FilePath: \web开发项目\shop_client\src\mysql_server\login.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express')
const pool = require('./mysql_connect')
const app = express()
const bodyParser = require('body-parser')
const Token = require('../token/token')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/server/login', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  console.log(req.body)
  // console.log(res)
  // req.on('data', (pdata) => {
  //   message += pdata
  // })
  // req.on('end', () => {
  //   message = JSON.parse(message)
  //   console.log(message)
  // })
  let mp = {}
  pool.getConnection((err, connect) => {
    if (!err) {
      console.log('数据库连接成功!')
      connect.query('select * from user where username = ? and password = ?',
        [req.body.username, req.body.password], (err, result) => {
          const data = JSON.parse(JSON.stringify(result))
          if (data[0] !== undefined) {
            const token2 = Token.setToken(data[0].username, data[0].numberphone)
            mp.token = token2
            mp.data = data[0]
            mp.IsLogin = 'true'
            console.log(token2)
            console.log('登录成功！')
            console.log(result)
            console.log(data[0])
            console.log(new Date())
            res.send(mp)
          } else {
            console.log(err)
            console.log('登录失败！')
            res.send('您的账户名或密码不正确')
          }
        })
    }
  })
})

app.listen(8024, () => {
  console.log('登录服务器已启动!')
})
