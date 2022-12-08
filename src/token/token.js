/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-09 09:28:50
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-09 23:31:51
 * @FilePath: \web开发项目\shop_client\src\token\token.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const jwt = require('jsonwebtoken')
const jwtScrect = 'zgs_first_token' // 签名

// 登录接口 生成token的方法
const setToken = function (username, userphone) {
  // expiresln 设置token过期的时间
  // { user_name: user_name, user_id: user_id } 传入需要解析的值（ 一般为用户名，用户id 等）
  return jwt.sign({ username: username, userphone: userphone }, jwtScrect, { expiresIn: '1h' })
}
// 各个接口需要验证token的方法
const getToken = function (token) {
  try {
    let data = jwt.verify(token, 'token')
    return {
      gadID: data.gadID,
      token: true
    }
  } catch (err) {
    return {
      gadID: err,
      token: false
    }
  }
}

module.exports = {
  setToken,
  getToken
}
