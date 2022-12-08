<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-09 18:31:17
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-16 11:05:29
 * @FilePath: \web开发项目\shop_client\src\views\Person_Center.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <NavBoxHome></NavBoxHome>
        <SearchBoxPerson></SearchBoxPerson>
        <router-view></router-view>
    </div>
</template>
<script>
import NavBoxHome from '../components/NavBox_Home.vue'
import SearchBoxPerson from '../components/SearchBoxPerson.vue'
export default {
  name: 'PersonCenter',
  components: {
    NavBoxHome,
    SearchBoxPerson
  }
}
</script>
