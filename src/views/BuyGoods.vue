<template>
    <div>
        <div class="titlehead">
            <ul>
                <li><router-link to="/person/personhome/buygoods">所有订单</router-link></li>
                <li>|</li>
                <li><router-link to="/person/personhome/buygoods/wait_pay">待付款</router-link></li>
                <li>|</li>
                <li><router-link to="/person/personhome/buygoods/wait_send">待发货</router-link></li>
                <li>|</li>
                <li><router-link to="/person/personhome/buygoods/wait_get">待收货</router-link></li>
                <li>|</li>
                <li><router-link to="/person/personhome/buygoods/wait_assess">待评价</router-link></li>
            </ul>
        </div>
        <div class="titlehead2">
            <ul>
                <li>宝贝</li>
                <li>单价</li>
                <li>数量</li>
                <li>实付款</li>
                <li>交易状态</li>
            </ul>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
  name: 'BuyGoods'
}
</script>

<style lang="less" scoped>
*{
    margin: 0%;
    padding: 0%;
}
a{
    text-decoration: none;
    font-weight: bold;
    font-size: 17px;
    color: black;
}
ul{
    list-style: none;
    display: flex;
}
.titlehead li{
    margin-top: 30px;
    margin-left: 20px;
    color: rgb(224, 217, 217);
}
.titlehead li:nth-child(2n+1){
    min-width: 70px;
}
.titlehead>ul{
    border-bottom: 1px rgb(224, 217, 217)  solid;
    margin-bottom: 15px;
}
.titlehead li:nth-child(1){
    margin-left: 10px;
}
.titlehead2 ul{
    justify-content: space-around;
    background-color:rgb(239, 232, 232);
    height: 35px;
    line-height: 35px;
    margin-bottom: 10px;
}
.titlehead2 li{
    color: gray;
}
</style>
