<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-08 16:02:40
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-16 10:35:39
 * @FilePath: \web开发项目\shop_client\src\components\NavBox.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
<div id="NavBox">
    <ul>
        <li><svg t="1657271006995" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1350" width="13" height="13"><path d="M895.616384 347.812188q0 10.22977-0.511489 19.436563t-1.534466 19.436563q-9.206793 84.907093-37.338661 163.164835t-71.096903 150.377622-99.228771 138.613387-121.734266 127.872128q-9.206793 11.252747-23.528472 11.252747-15.344655 0-24.551449-11.252747-65.470529-61.378621-122.245754-128.895105t-100.251748-141.170829-71.608392-152.935065-36.315684-165.210789q0-8.183816-0.511489-15.344655t-0.511489-15.344655q0-71.608392 28.131868-135.032967t76.211788-110.481518 113.038961-74.677323 138.613387-27.62038 138.101898 27.62038 112.527473 74.677323 76.211788 110.481518 28.131868 135.032967zM540.643357 507.396603q33.758242 0 63.424575-12.787213t51.66034-34.26973 34.781219-50.637363 12.787213-61.89011-12.787213-61.89011-34.781219-50.637363-51.66034-34.26973-63.424575-12.787213-63.424575 12.787213-52.171828 34.26973-35.292707 50.637363-12.787213 61.89011 12.787213 61.89011 35.292707 50.637363 52.171828 34.26973 63.424575 12.787213z" p-id="1351" fill="#FF4E4E"></path></svg><span>{{city}}</span></li>
        <li><router-link to="/login">你好，请登录</router-link></li>
        <li><router-link to="/register">免费注册</router-link></li>
        <li><router-link to="/person">个人中心</router-link></li>
        <li><router-link to="/my_shop">我的购物车</router-link></li>
        <li><router-link to="/customer_service">联系客服</router-link></li>
        <li>网站导航</li>
        <li><router-link to="/manager">管理员通道</router-link></li>
    </ul>
</div>
</template>

<script>
export default {
  name: 'NavBox_no',
  data () {
    return {
      city: localStorage.city
    }
  },
  // mounted () {
  //   this.getLocation()
  // },
  methods: {
    // getLocation () {
    //   let geolocation = new window.qq.maps.Geolocation('WVRBZ-RMI6R-S46WU-WARXB-6V4WO-UWBIO', 'myapp')
    //   geolocation.getLocation(this.showPosition, this.errorPosition)
    // },
    // showPosition (position) {
    //   // console.log(position)
    //   this.city = position.city
    //   localStorage.setItem('city', this.city)
    // },
    // errorPosition () {
    //   // console.log('定位失败')
    //   // 继续定位
    //   this.getLocation()
    // },
    go () {
      this.$router.replace('/register')
    }
  }
}
</script>

<style lang="less" scoped>
*{
            margin: 0%;
            padding: 0%;
            color: cadetblue;
        }
        #NavBox{
            min-width: 1024px;
            background-color: rgb(238, 235, 235);
        }
        #NavBox>ul{
            list-style: none;
            display: flex;
            height: 38px;
            line-height: 38px;
            font-size:13px;
            overflow: hidden;
        }
        ul>li{
            width:80px;
            padding: 0%;
            margin-left: 5px;
            text-align: center;
        }
        li>a{
            width: 100%;
            padding: 0%;
            text-decoration: none;
        }
        ul>li:nth-child(2){
            margin-left: 150px;
            overflow: hidden;
        }
        @media only screen and (max-width:1024px){
           ul>li:nth-child(2){
            margin-left: 44%;
           }
           #NavBox>ul{
            margin-right: 3%;
           }
        }
        @media only screen and (min-width:1024px){
            #NavBox>ul{
                margin-left: 5%;
                margin-right: 3%;
            }
            ul>li:nth-child(2){
                margin-left: 38%;
                width: 95px;
            }
        }
</style>
