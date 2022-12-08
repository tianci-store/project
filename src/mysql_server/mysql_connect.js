/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-25 22:34:52
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-16 15:55:54
 * @FilePath: \web开发项目\shop_client\src\mysql_server\mysql_connect.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const mysql = require('mysql')

const pool = mysql.createPool({
  user: 'root',
  port: 3306,
  password: '200ylx1113',
  host: '127.0.0.1',
  database: 'shop_client',
  connectionLimit: 20,
  multipleStatements: true
})
module.exports = pool
