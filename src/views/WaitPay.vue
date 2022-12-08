<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-18 15:20:31
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-18 17:08:18
 * @FilePath: \web开发项目\shop_client\src\views\AllOrder.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
            <div class="twobutton">
                <button class="back">上一页</button>
                <button class="go">下一页</button>
            </div>
        <div class="for">
        <!-- 使用循环 -->
        <div class="title1">
            <ul>
                <li>日期</li>
                <li>订单号:xxxx</li>
                <li><router-link to="">店铺</router-link></li>
                <li><svg t="1660810074844" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2470" width="25" height="25"><path d="M840 288H688v-56c0-40-32-72-72-72h-208C368 160 336 192 336 232V288h-152c-12.8 0-24 11.2-24 24s11.2 24 24 24h656c12.8 0 24-11.2 24-24s-11.2-24-24-24zM384 288v-56c0-12.8 11.2-24 24-24h208c12.8 0 24 11.2 24 24V288H384zM758.4 384c-12.8 0-24 11.2-24 24v363.2c0 24-19.2 44.8-44.8 44.8H332.8c-24 0-44.8-19.2-44.8-44.8V408c0-12.8-11.2-24-24-24s-24 11.2-24 24v363.2c0 51.2 41.6 92.8 92.8 92.8h358.4c51.2 0 92.8-41.6 92.8-92.8V408c-1.6-12.8-12.8-24-25.6-24z" p-id="2471"></path><path d="M444.8 744v-336c0-12.8-11.2-24-24-24s-24 11.2-24 24v336c0 12.8 11.2 24 24 24s24-11.2 24-24zM627.2 744v-336c0-12.8-11.2-24-24-24s-24 11.2-24 24v336c0 12.8 11.2 24 24 24s24-11.2 24-24z" p-id="2472"></path></svg></li>
            </ul>
        </div>
        <div class="content">
            <ul>
                <li><router-link to="">商品信息</router-link></li>
                <li>￥0.00</li>
                <li>0</li>
                <li>￥0.00</li>
                <li>交易成功</li>
            </ul>
        </div>
        </div>
        <div>利用v-for循环输出多个待付款商品，如果没有则把上面所有内容皆去除</div>
    </div>
</template>

<script>
export default {
  name: 'ALLOrder'
}
</script>

<style lang="less" scoped>
*{
    margin: 0%;
    padding: 0%;
}
a{
    color: rgb(54, 48, 48);
    text-decoration: none;
}
ul{
    list-style: none;
    display: flex;
}
.for{
    border: 1px rgb(207, 199, 199) solid;
}
.twobutton{
    min-width: 200px;
    margin-bottom: 10px;
    margin-left: 89%;
}
button{
    background-color: #fff;
    border: 1px rgb(218, 205, 205) solid;
    color: rgb(189, 163, 163);
}
.twobutton>.back{
    margin-right: 8px;
}
.title1>ul{
    height: 40px;
    line-height: 40px;
    border-bottom: 1px rgb(207, 199, 199) solid;
    background-color: rgb(206, 225, 225);
    padding-left: 30px;
}
.title1 li:nth-child(1){
    min-width: 40px;
}
.title1 li:nth-child(2){
    margin-left: 30px;
    margin-right: 25%;
    min-width: 120px;
}
.title1 li:nth-child(3){
    min-width: 40px;
}
.title1 li:nth-child(4){
    margin-left: 36%;
    margin-top: 8px;
}
.content>ul{
    justify-content: space-around;
    height: 100px;
    line-height: 100px;
}
@media screen and (max-width:1100px) {
    .twobutton{
        margin-left: 85%;
    }
}
</style>
