<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-10 18:06:35
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-19 10:50:08
 * @FilePath: \web开发项目\shop_client\src\views\Favorites.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
      <NavBoxHome></NavBoxHome>
      <SearchBoxFavorites></SearchBoxFavorites>
      <router-view></router-view>
    </div>
</template>

<script>
import NavBoxHome from '../components/NavBox_Home.vue'
import SearchBoxFavorites from '../components/SearchBoxFavorites.vue'
export default {
  name: 'FavoritesFolder',
  components: {
    NavBoxHome,
    SearchBoxFavorites
  }
}
</script>
