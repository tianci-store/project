<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-19 15:15:25
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-20 10:54:04
 * @FilePath: \web开发项目\shop_client\src\views\ModifyPassword.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <div class="tableborder">
            <ul>
                <li><span class="account">账号:</span><input type="text"></li>
                <li><span class="phone">手机号:</span><input type="number"></li>
                <li><span class="newpassword">新密码:</span><input type="password"></li>
                <li><span class="rightpassword">确认密码:</span><input type="password"></li>
            </ul>
        <button>修改</button>
        </div>
    </div>
</template>

<style lang="less" scoped>
*{
    margin: 0%;
    padding: 0%;
}
.tableborder{
    border: 1px rgb(227, 214, 214) solid;
    width: 80%;
    height: 280px;
}
ul{
    list-style: none;
    margin-top: 30px;
    margin-left: 280px;
}
ul>li{
    margin-bottom: 20px;
}
span{
    margin-right: 20px;
}
.account{
    padding-left: 32px;
}
.phone{
    padding-left: 16px;
}
.newpassword{
    padding-left: 16px;
}
button{
    width: 60px;
    background-color: rgb(203, 227, 239);
    border: 1px rgb(203, 227, 239) solid;
    padding: 4px 10px;
    margin-left: 380px;
    margin-top: 15px;
    color: rgb(102, 102, 219);
}
</style>
