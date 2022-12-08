<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-07 23:13:47
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-16 10:44:25
 * @FilePath: \web开发项目\shop_client\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEmar
-->
<template>
<div>
<router-view :key="$route.fullPath"></router-view>
</div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      city: ''
    }
  },
  mounted () {
    this.getLocation()
    let time = 0
    window.onbeforeunload = () => {
      time = new Date().getTime()
      // localStorage.clear()
      // console.log(time)
    }
    window.onunload = () => {
      // console.log(new Date().getTime() - time)
      if ((new Date().getTime() - time) < 5) {
        // console.log('2222')
        localStorage.clear()
      }
    }
  },
  methods: {
    getLocation () {
      let geolocation = new window.qq.maps.Geolocation('WVRBZ-RMI6R-S46WU-WARXB-6V4WO-UWBIO', 'myapp')
      geolocation.getLocation(this.showPosition, this.errorPosition)
    },
    showPosition (position) {
      // console.log(position)
      this.city = position.city
      localStorage.setItem('city', this.city)
    },
    errorPosition () {
      // console.log('定位失败')
      // 继续定位
      this.getLocation()
    }
  }
}
</script>

<style lang="less">
*{
  margin: 0%;
  padding: 0%;
}
</style>
