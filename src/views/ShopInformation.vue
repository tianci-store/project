<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-16 17:54:01
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-14 09:19:45
 * @FilePath: \web开发项目\shop_client\src\views\ShopInformation.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <div class="informationtable">
            <ul class="title">
                <li><router-link to="/person/myinformation">头像</router-link></li>
                <li><router-link to="/person/myinformation">{{username}}</router-link></li>
                <li><router-link to="/person/myinformation/address">收货地址</router-link></li>
                <li><router-link to="/person/personhome/refund">退款</router-link></li>
            </ul>
            <ul class="detail">
                <li><router-link to="/person/personhome/buygoods/wait_pay">待付款</router-link></li>
                <li><router-link to="/person/personhome/buygoods/wait_send">待发货</router-link></li>
                <li><router-link to="/person/personhome/buygoods/wait_get">待收货</router-link></li>
                <li><router-link to="/person/personhome/buygoods/wait_assess">待评价</router-link></li>
            </ul>
        </div>
        <div class="recommend">
            推荐部分商品，这部分暂时未写
        </div>
    </div>
</template>

<script>
export default {
  name: 'ShopInformation',
  data () {
    return {
      username: localStorage.username
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
    color: rgb(53, 19, 19);
    font-size: 14px;
}
ul{
    list-style: none;
    display: flex;
    justify-content: space-around;
}
.informationtable{
    margin-top: 25px;
    border: 1px rgb(236, 210, 210) solid;
    margin-bottom: 25px;
}
.informationtable>.title{
    height: 70px;
    border-bottom: 1px rgb(240, 208, 208) solid;
    line-height: 70px;
    background-color: rgb(238, 246, 252);
}
.informationtable>.detail{
    height: 50px;
    line-height: 50px;
    margin-left: -5px;
    margin-right: -5px;
}
.detail>li:nth-child(2){
    margin-left: -13px;
}
.recommend{
    height: 300px;
    line-height: 300px;
    text-align: center;
    background-color: #dee2e6;
}
</style>
