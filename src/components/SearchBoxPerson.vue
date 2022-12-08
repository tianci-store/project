<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-10 09:59:57
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-18 16:32:08
 * @FilePath: \web开发项目\shop_client\src\components\SearchBox.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%A
-->
<template>
        <div class="searchbox">
        <img src="../assets/image/logo.png">
        <router-link class="person" to="/person">个人首页</router-link>
        <router-link class="information" to="/person/myinformation">账户信息</router-link>
        <!-- 下面的goods需要设置随机值，并且一段时间就变换一次 -->
        <input type="search" name="search" placeholder="goods">
        <button class="search"><svg t="1657448025969" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2290" width="32" height="32"><path d="M469.333333 768c-166.4 0-298.666667-132.266667-298.666666-298.666667s132.266667-298.666667 298.666666-298.666666 298.666667 132.266667 298.666667 298.666666-132.266667 298.666667-298.666667 298.666667z m0-85.333333c119.466667 0 213.333333-93.866667 213.333334-213.333334s-93.866667-213.333333-213.333334-213.333333-213.333333 93.866667-213.333333 213.333333 93.866667 213.333333 213.333333 213.333334z m251.733334 0l119.466666 119.466666-59.733333 59.733334-119.466667-119.466667 59.733334-59.733333z" fill="#ffff" p-id="2291"></path></svg></button>
        <!-- <button class="shopping_cart"><svg t="1657449343648" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14729" width="20" height="20"><path d="M896 225.28l-102.4 353.28L267.74016 637.71648 157.23008 225.27488 896 225.28zM304.02048 337.90976l47.4368 177.03424 354.87232-39.92064 39.74144-137.10848-442.05056-0.00512z" fill="#FF4E4E" p-id="14730"></path><path d="M247.77728 128l137.1904 512H814.08v112.64H298.53184L131.16416 128h116.61312z" fill="#FF4E4E" p-id="14731"></path><path d="M157.23008 225.27488l116.608-0.00512 108.34432 404.34176-114.44224 8.10496z" fill="#FF1F1F" p-id="14732"></path><path d="M721.92 839.68m-56.32 0a56.32 56.32 0 1 0 112.64 0 56.32 56.32 0 1 0-112.64 0Z" fill="#FF4E4E" p-id="14733"></path><path d="M353.28 839.68m-56.32 0a56.32 56.32 0 1 0 112.64 0 56.32 56.32 0 1 0-112.64 0Z" fill="#FF4E4E" p-id="14734"></path></svg><router-link class="cart" to="/my_shop">我的购物车</router-link></button> -->
    </div>
</template>

<script>
export default {
  name: 'SearchBox'
}
</script>

<style lang="less" scoped>
        *{
            margin: 0%;
            padding: 0%;
        }
        html{
            min-width: 1024px;
        }
        // 去除input选中后默认黑边框
        input:focus{
            outline: none;
        }
        a{
            min-width: 90px;
            text-decoration: none;
            margin-left: 80px;
            color: white;
            font-size: 20px;
            line-height: 70px;
            font-weight: bold;
        }
        img{
            width: 50px;
            height: 50px;
            margin-left: 10%;
            margin-top: 10px;
            margin-right: 5%;
        }
        .searchbox{
            display: flex;
            height: 70px;
            border-bottom: 1px rgb(243, 202, 202) solid;
            min-width: 1024px;
            background-color: red;
        }
        .searchbox>input{
            height: 40px;
            width: 400px;
            margin-left: 25%;
            margin-top: 15px;
            border: 3px red solid;
            border-radius: 20px 20px 20px 20px;
            text-indent: 15px;
        }
        .searchbox>.search{
            margin-top: 18.3px;
            margin-left: -58px;
            background-color: rgb(218, 221, 222);
            padding-right: 10px;
            padding-left: 10px;
            height: 33px;
            border: 1px rgb(196, 199, 200) solid;
            border-radius: 18px 18px 18px 18px;
        }
        @media screen and (max-width: 1400px){
            img{
                margin-left: 8%;
            }
            .searchbox>input{
                margin-left: 18%;
            }
        }
        @media screen and (max-width:1024px){
            img{
                margin-left: 4%;
                margin-right: -2%;
            }
            .searchbox>input{
                margin-left: 10%;
            }
        }
</style>
