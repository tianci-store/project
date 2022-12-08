<!-- eslint-disable vue/no-multiple-template-root -->
<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-18 11:22:00
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-13 10:11:29
 * @FilePath: \web开发项目\shop_client\src\components\Home_no.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
<div>
<!-- 导航条模块 -->
  <NavBox></NavBox>
<!-- 搜索框部分 -->
  <SearchBox></SearchBox>
<!-- 菜单轮播图模块 -->
  <MenuSwiperBox></MenuSwiperBox>
  <!-- 脚本 -->
  <FooterBox></FooterBox>
</div>
</template>

<script>
import NavBox from './NavBox_no.vue'
import SearchBox from './SearchBox.vue'
import MenuSwiperBox from './MenuSwiperBox_no.vue'
import FooterBox from './FooterBox.vue'
export default {
  name: 'Home_no',
  components: {
    NavBox,
    SearchBox,
    MenuSwiperBox,
    FooterBox
  }
}
</script>

<style lang="less">
*{
  margin: 0%;
  padding: 0%;
}
</style>
