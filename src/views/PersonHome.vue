<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-16 16:15:13
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-16 11:11:53
 * @FilePath: \web开发项目\shop_client\src\views\PersonHome.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div class="two">
      <div class="menu">
        <ul>
          <li><router-link to="/person" target="_self">我的购物信息</router-link></li>
          <li><router-link to="/my_shop" target="_self">我的购物车</router-link></li>
          <li><router-link to="/person/personhome/buygoods">购买过的商品</router-link></li>
          <li><router-link to="/person/personhome/buyshop">购买过的店铺</router-link></li>
          <li><router-link to="/favorites" target="_blank">我的收藏</router-link></li>
          <!-- 评价管理暂时不写 -->
          <li><router-link to="/person/personhome/refund">我的退款</router-link></li>
          <li><router-link to="myhistory" target="_blank">我的足迹</router-link></li>
        </ul>
      </div>
      <div class="routerview">
        <router-view></router-view>
      </div>
    </div>
    <footer class="footer">
      <div class="illustrate">版权所有@天赐之翼 2001-<span class="year">{{ nowdate }}</span>.保留所有权利。
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'PersonHome',
  data () {
    return {
      nowdate: ''
    }
  },
  mounted () {
    let date = new Date()
    this.nowdate = date.getFullYear()
  }
}
</script>
<style lang="less" scoped>
* {
  margin: 0%;
  padding: 0%;
}
a {
  text-decoration: none;
  color: black;
}
.menu {
  margin-left: 10%;
}
.menu > ul {
  list-style: none;
}
.menu li {
  font-size: 18px;
  margin-top: 25px;
  min-width: 110px;
//   background-color: red;
}
.two {
  display: flex;
}
.routerview {
  margin-left: 6%;
  width: 1000px;
  height: 500px;
//   background-color: red;
}
 .footer{
          width: 100%;
            position:absolute;
            top: 610px;
            bottom:0;
            background-color: rgb(162, 150, 150);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
        }
</style>
