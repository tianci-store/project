<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-16 16:15:34
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-20 10:21:10
 * @FilePath: \web开发项目\shop_client\src\views\MyInformation.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <div class="information">
        <div class="list">
            <ul>
                <li><router-link to="/person/myinformation">账号管理</router-link></li>
                <li><router-link to="/person/myinformation/modifyinformation">个人资料</router-link></li>
                <li><router-link to="/person/myinformation/address">收货地址</router-link></li>
                <li><router-link to="/person/myinformation/modifypassword">密码修改</router-link></li>
            </ul>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MyInformation'
}
</script>

<style lang="less" scoped>
*{
    margin: 0%;
    padding: 0%;
}
a{
    text-decoration: none;
    color: rgb(69, 62, 62);
 }
.information{
    display: flex;
    flex-direction: row;
}
.list{
    margin-top: 30px;
    margin-left: 15%;
}
.list>ul{
    list-style: none;
    display: flex;
    flex-direction: column;
}
.list li{
    min-width: 65px;
    margin-top: 15px;
}
.content{
    margin-top: 40px;
    margin-left: 5%;
    width: 74%;
}
</style>
