<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-09 18:35:04
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-14 16:15:00
 * @FilePath: \web开发项目\shop_client\src\views\MyShop_t.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <!-- 有跳转首页的导航条 -->
        <NavBoxHome></NavBoxHome>
        <!-- 公共的的第二部分搜索条模块 -->
        <SearchBoxPublic></SearchBoxPublic>
        <!-- 购物车列表展示模块 -->
        <MyShopMain></MyShopMain>
    </div>
</template>

<script>
import NavBoxHome from '../components/NavBox_Home.vue'
import SearchBoxPublic from '../components/SearchBoxPublic.vue'
import MyShopMain from './MyShopMain.vue'
export default {
  name: 'MyShop',
  components: {
    NavBoxHome,
    SearchBoxPublic,
    MyShopMain
  }
}
</script>
