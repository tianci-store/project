<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-12 01:24:07
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-14 11:17:03
 * @FilePath: \web开发项目\shop_client\src\views\MyHistory_t.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <NavBoxHome></NavBoxHome>
        <SearchBoxPublic></SearchBoxPublic>
        <div>我的足迹</div>
    </div>
</template>

<script>
import NavBoxHome from '../components/NavBox_Home.vue'
import SearchBoxPublic from '../components/SearchBoxPublic.vue'
export default {
  name: 'MyHistory',
  components: {
    NavBoxHome,
    SearchBoxPublic
  }
}
</script>
