<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-14 11:04:48
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-22 22:39:14
 * @FilePath: \web开发项目\shop_client\src\views\MyShopMain.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
<div>
    <div class="main">
        <div class="list">
            <div class="title">
            <div class="title2">购物车(全部<span class="totalnumber">0</span>)</div>
            <div class="title3">已选商品(不含运费)</div>
            <div class="total">0.00</div>
            <button>结算</button>
            </div>
            <!-- <div class="myshop"> -->
        <div class="descript">
            <ul>
                <li class="goodsinformation">商品信息</li>
                <li>单价</li>
                <li>数量</li>
                <li>金额</li>
            </ul>
        </div>
        <!-- 用个for循环 -->
        <div class="detail">
            <ul>
                <li class="goodsinformation">商品信息</li>
                <li>￥0.00</li>
                <li>0</li>
                <li>￥0.00</li>
            </ul>
            <ul>
                <li class="goodsinformation">商品信息</li>
                <li>￥0.00</li>
                <li>0</li>
                <li>￥0.00</li>
            </ul>
        </div>
            <!-- </div> -->
        <div class="operate">
            <input type="checkbox"><span class="input">全选</span>
            <div class="delete">删除</div>
            <div class="chosegoods">已选商品<span class="totalchose">0</span>件</div>
            <div class="all">合计(不含运费) : <span class="totalmoney">0.00</span></div>
            <button>结算</button>
        </div>
    </div>
    </div>
    <footer class="footer">
        <div class="illustrate">版权所有@天赐之翼 2001-<span class="year">{{nowdate}}</span>.保留所有权利。</div>
    </footer>
</div>
</template>

<script>
export default {
  name: 'MyShopMain',
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
*{
    margin: 0%;
    padding: 0%;
}
.main{
    background-color: rgb(227, 218, 218);
    height:520px;
    overflow: hidden;
}
.main>.list{
    background-color: white;
    height: 480px;
    width: 900px;
    margin:auto;
    margin-top: 20px;
    border-radius: 20px 20px 20px 20px;
}
.list>.title{
    height: 70px;
    display: flex;
    border-bottom: 1px rgb(214, 197, 197) solid;
}
.title>div{
    margin-top: 25px;
}
.title>.title2{
    margin-left: 20px;
    margin-right: 440px;
    font-size: 20px;
}
.title>.title3{
    margin-right: 25px;
}
.title>.total{
    font-size: 18px;
    color: red;
    margin-right: 25px;
}
.title>button{
    margin-top: 17px;
    width: 80px;
    height: 40px;
    border-radius: 18px 18px 18px 18px;
    background-color: rgb(204, 168, 168);
    color: white;
    border: 1px solid rgb(204, 168, 168);
}
    ul{
        list-style: none;
        display: flex;
    }
    .descript{
        height: 50px;
        font-size: 18px;
        margin-bottom: 20px;
    }
    .descript li{
        margin-top: 20px;
    }
.descript li:nth-child(1){
    margin-left: 120px;
    margin-right: 280px;
}
.descript li:not(.goodsinformation){
    margin-left: 85px;
}
.list>.detail{
background-color: rgb(243, 241, 241);
height: 250px;
margin-left: 20px;
margin-right: 20px;
border-radius: 30px 30px 30px 30px;
overflow: hidden;
}
.detail li:nth-child(1){
    margin-left: 50px;
    margin-right: 322px;
}
.detail li:not(.goodsinformation){
    margin-left: 93px;
}
.detail>ul:nth-child(1){
    margin-top:20px;
}
.detail>ul:nth-child(2){
    margin-top: 90px;
}
.list>.operate{
    display: flex;
}
input{
    margin-left: 50px;
    margin-top: 20px;
}
.operate>.delete{
    margin-left: 50px;
    margin-right: 250px;
}
.operate>.all{
    margin-left: 50px;
    margin-right: 50px;
}
.operate>button{
    margin-top: 20px;
    width: 80px;
    height: 40px;
    border-radius: 18px 18px 18px 18px;
    background-color: rgb(204, 168, 168);
    color: white;
    border: 1px solid rgb(204, 168, 168);
}
.operate>div{
    margin-top: 30px;
}
.operate>.input{
    margin-top: 30px;
    margin-left: 5px;
}
 .footer{
            width: 100%;
            position:absolute;
            top: 659px;
            bottom:0;
            background-color: rgb(45, 44, 44);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
        }
</style>
