<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-19 15:06:59
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-14 09:20:50
 * @FilePath: \web开发项目\shop_client\src\views\Information.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
      <div class="border">
        <div class="informationcontent">
          <div class="title">您的基本信息</div>
          <table>
            <tr>
              <td>账号名:</td>
              <td>{{username}}</td>
            </tr>
            <tr>
              <td>登录邮箱:</td>
              <td>您尚未设置登录邮箱</td>
              <!-- 下面这行设置增加邮箱或修改邮箱 -->
              <td><router-link to="/addemail">添加邮箱</router-link></td>
            </tr>
            <tr>
              <td>绑定手机:</td>
              <!-- 展示电话号码的前三位和后四位 -->
              <td>{{numberphone}}</td>
              <td><router-link to="/modifyphone">修改手机</router-link></td>
            </tr>
          </table>
        </div>
        <div class="secret">
          <div class="title">隐私设置</div>
          <div class="secretcontent">
          <div class="illustration">功能说明</div>
          <div>管理个性化推荐内容的展示</div>
          <div><router-link to="">查看</router-link></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Information_t',
  data () {
    return {
      username: localStorage.username,
      email: localStorage.email,
      numberphone: localStorage.numberphone
    }
  }
}
</script>

<style lang="less" scoped>
*{
  margin: 0%;
  padding: 0%;
}
a{
  text-decoration: none;
}
.border{
  width:700px;
  height: 355px;
  border: 1px rgb(238, 215, 215) solid;
}
.informationcontent{
  margin-left: 20px;
  margin-right: 15px;
  border-bottom: 1px rgb(220, 206, 206) solid;
}
.title{
  margin-top: 20px;
  font-size: 13px;
  font-weight: bold;
}
table {
  border-collapse: separate;
  border-spacing: 15px 20px;
  font-size: 13px;
}
.secret>.title{
  margin-top: 20px;
  margin-left: 20px;
  font-size: 13px;
  font-weight: bold;
}
.secret>.secretcontent{
  height: 150px;
  line-height: 120px;
  // background-color: red;
  font-size: 13px;
  display: flex;
  justify-content: space-around;
}
</style>
