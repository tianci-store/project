<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-10 09:59:57
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-14 16:24:44
 * @FilePath: \web开发项目\shop_client\src\components\SearchBox.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%A
-->
<template>
        <div class="searchbox">
        <img src="../assets/image/logo.png">
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
        // 去除input选中后默认黑边框
        input:focus{
    outline: none;
}
        img{
            width: 80px;
            height: 80px;
            margin-left: 15%;
            margin-top: 10px;
        }
        .searchbox{
            display: flex;
            line-height: 80px;
            height: 100px;
            border-bottom: 1px rgb(243, 202, 202) solid;
            min-width: 1024px;
        }
        .searchbox>input{
            height: 40px;
            width: 400px;
            margin-left: 30%;
            margin-top: 40px;
            border: 3px red solid;
            border-radius: 20px 20px 20px 20px;
            text-indent: 15px;
        }
        .searchbox>.search{
            margin-top: 43.8px;
            margin-left: -58px;
            background-color: red;
            padding-right: 10px;
            padding-left: 10px;
            height: 33px;
            border: 1px red solid;
            border-radius: 18px 18px 18px 18px;
        }
        // .searchbox>.shopping_cart{
        //     background-color: #fff;
        //     margin-top: 40px;
        //     margin-left: 50px;
        //     width: 100px;
        //     height: 36px;
        //     border: 1px rgb(239, 216, 216) solid;
        //     // margin-right: 15%;
        // }
        // .shopping_cart>.cart{
        //     margin-left: 10px;
        //     text-decoration: none;
        //     font-size: 13px;
        //     color: red;
        // }
        // .shopping_cart>.icon{
        //     margin-bottom: -4px;
        // }
        // .shopping_cart:hover{
        //     border: 1px rgb(252, 1, 1) solid;
        // }
        @media screen and (max-width: 1024px){
            img{
                margin-left: 10%;
            }
        }
        @media screen and (min-width:1024px){
            img{
                margin-left: 20%;
            }
        }
</style>
