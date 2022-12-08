<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-10 23:51:40
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-14 11:24:23
 * @FilePath: \web开发项目\shop_client\src\components\MenuSwiperBox.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
<div class="menuswiper">
      <div class="menu">
        <ul>
          <li class="phone"><router-link to="/phone">手机数码</router-link></li>
          <li class="computer">
            <router-link to="/computer">平板电脑</router-link>
          </li>
          <li class="electric">
            <router-link to="/electric">家用电器</router-link>
          </li>
          <li class="car"><router-link to="/car">汽车用品</router-link></li>
          <li class="food"><router-link to="/food">食品饮料</router-link></li>
          <li class="book"><router-link to="/book">图书杂志</router-link></li>
          <li class="clothing">
            <router-link to="/clothing">服装服饰</router-link>
          </li>
          <li class="travel">
            <router-link to="/travel">出行服务</router-link>
          </li>
        </ul>
      </div>
      <div class="swiper">
        <!-- <button class="icon2"><svg t="1657637556956" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2117" width="20" height="20"><path fill="white" d="M228.894 445.741l427.67-427.67c24.095-24.095 60.236-24.095 84.33 0 24.094 24.094 24.094 60.235 0 84.329L355.388 487.906l385.506 385.506c24.094 24.094 24.094 60.235 0 84.33-24.094 24.093-60.235 24.093-84.33 0L228.895 530.07c-12.047-12.047-18.07-30.118-18.07-42.165 0-18.07 6.023-30.118 18.07-42.165z" p-id="2118"></path></svg></button> -->
        <div class="circle">
          <ul>
            <li v-for="(item,index) in check" :key="index"><input name="image" type="radio" :checked="item[index]" @click="iconclick(index)"></li>
          </ul>
        </div>
        <div class="image">
        <img :src="this.url">
        </div>
        <!-- <button class="icon3"><svg t="1657637784728" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2461" width="20" height="20" fill="white"><path d="M740.894 445.741l-427.67-427.67c-24.095-24.095-60.236-24.095-84.33 0-24.094 24.094-24.094 60.235 0 84.329L614.4 487.906 228.894 873.412c-24.094 24.094-24.094 60.235 0 84.33 24.094 24.093 60.235 24.093 84.33 0l427.67-427.671c12.047-12.047 18.07-30.118 18.07-42.165 0-18.07-6.023-30.118-18.07-42.165z" p-id="2462"></path></svg></button> -->
      </div>
      <div class="recommend">
        <div class="picture">头像</div>
        <div class="account">Hi!<span>{{username}}</span></div>
        <div class="buy">
          <ul class="number">
            <li>{{myshop}}</li>
            <li>{{getgoods}}</li>
            <li>{{sendgoods}}</li>
            <li>{{pay}}</li>
            <li>{{assess}}</li>
          </ul>
         <ul class="descript_buy">
        <li><router-link class="myshop" to="/my_shop">购物车</router-link></li>
        <li><router-link class="waitget" to="/person/personhome/buygoods/wait_get">待收货</router-link></li>
        <li><router-link class="waitsend" to="/person/personhome/buygoods/wait_send">代发货</router-link></li>
        <li><router-link class="waitpay" to="/person/personhome/buygoods/wait_pay">待付款</router-link></li>
        <li><router-link class="waitassess" to="/person/personhome/buygoods/wait_assess">代评价</router-link></li>
          </ul>
        </div>
        <div class="record">
            <ul class="icon">
                <li><svg t="1657553726100" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2243" width="25" height="25"><path d="M335.008 916.629333c-35.914667 22.314667-82.88 10.773333-104.693333-25.557333a77.333333 77.333333 0 0 1-8.96-57.429333l46.485333-198.24a13.141333 13.141333 0 0 0-4.021333-12.864l-152.16-132.586667c-31.605333-27.52-35.253333-75.648-8.234667-107.733333a75.68 75.68 0 0 1 51.733333-26.752L354.848 339.2c4.352-0.362667 8.245333-3.232 10.026667-7.594667l76.938666-188.170666c16.032-39.2 60.618667-57.92 99.52-41.461334a76.309333 76.309333 0 0 1 40.832 41.461334l76.938667 188.16c1.781333 4.373333 5.674667 7.253333 10.026667 7.605333l199.712 16.277333c41.877333 3.413333 72.885333 40.458667 69.568 82.517334a76.938667 76.938667 0 0 1-26.08 51.978666l-152.16 132.586667c-3.541333 3.082667-5.141333 8.074667-4.021334 12.853333l46.485334 198.24c9.621333 41.013333-15.36 82.336-56.138667 92.224a75.285333 75.285333 0 0 1-57.525333-9.237333l-170.976-106.24a11.296 11.296 0 0 0-12.010667 0l-170.986667 106.24zM551.786667 756.032l170.976 106.24c2.624 1.621333 5.717333 2.122667 8.650666 1.408 6.410667-1.557333 10.56-8.426667 8.928-15.424l-46.485333-198.24a77.141333 77.141333 0 0 1 24.277333-75.733333L870.293333 441.706667c2.485333-2.165333 4.053333-5.312 4.330667-8.746667 0.565333-7.136-4.490667-13.173333-10.976-13.696l-199.712-16.288a75.989333 75.989333 0 0 1-64.064-47.168l-76.938667-188.16a12.309333 12.309333 0 0 0-6.538666-6.741333c-5.898667-2.496-12.725333 0.373333-15.328 6.741333l-76.949334 188.16a75.989333 75.989333 0 0 1-64.064 47.168l-199.701333 16.288a11.68 11.68 0 0 0-7.978667 4.181333 13.226667 13.226667 0 0 0 1.333334 18.261334l152.16 132.586666a77.141333 77.141333 0 0 1 24.277333 75.733334l-46.485333 198.229333a13.333333 13.333333 0 0 0 1.514666 9.877333c3.488 5.792 10.581333 7.530667 16.064 4.128l170.986667-106.229333a75.296 75.296 0 0 1 79.562667 0z" p-id="2244"></path></svg></li>
                <li><svg t="1657553957329" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9645" width="24" height="24"><path d="M820.113403 204.239638c-169.888272-169.918971-446.339558-169.918971-616.22783 0-169.921018 169.890318-169.921018 446.339558 0 616.22783 169.888272 169.921018 446.339558 169.921018 616.22783 0C990.035444 650.579195 990.035444 374.130979 820.113403 204.239638zM775.903505 776.257569c-145.526421 145.524374-382.315382 145.493675-527.808034 0-145.524374-145.524374-145.524374-382.281613 0-527.805988 145.492652-145.492652 382.281613-145.525398 527.808034 0C921.397181 393.945257 921.397181 630.764917 775.903505 776.257569z" p-id="9646"></path><path d="M768.413927 355.989807c-11.630898-10.934027-31.792077-10.301623-42.757826 1.359974L455.180923 645.302005l-144.45195-142.30096c-11.500938-11.345396-31.44313-11.250228-42.819225 0.252757-5.687536 5.782703-8.753361 13.399171-8.721639 21.519106 0.063445 8.058536 3.317559 15.642259 9.069563 21.268396l166.034501 163.601078 0.980327 0.946558c0.124843 0.12689 0.252757 0.252757 0.3776 0.346901l0 0.063445c1.928932 1.706875 3.949962 2.750647 5.815449 3.729951l3.476171 2.02103c3.603061 1.390673 7.300266 2.085498 11.06194 2.085498 4.108574 0 8.025791-0.788969 11.722996-2.368954 1.612731-0.663102 2.717901-1.549286 4.296863-2.592035 1.423419-0.821715 3.350304-1.959631 5.183046-3.664459l292.50389-311.400263c5.560646-5.846148 8.467859-13.527085 8.247848-21.585621C777.736247 369.105522 774.324544 361.584222 768.413927 355.989807z" p-id="9647"></path></svg></li>
                <li><svg t="1657554137441" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12056" width="26" height="26"><path d="M803.489282 224.331231C725.819319 146.630568 622.353852 103.849206 512.215406 103.849206c-110.168122 0-213.57526 42.781362-291.246247 120.482025-77.700663 77.686337-120.482025 181.107801-120.482025 291.246247 0 110.181425 42.782386 213.589586 120.482025 291.290249 77.670987 77.670987 181.078125 120.437 291.246247 120.437 110.138446 0 213.603913-42.766013 291.2749-120.437C964.056258 646.274146 964.056258 384.940163 803.489282 224.331231M765.62593 769.003352c-67.574025 67.603701-157.547199 104.801904-253.411547 104.801904-95.834672 0-185.837522-37.198204-253.441223-104.801904-139.718135-139.704832-139.718135-367.119285 0-506.823094 67.603701-67.560722 157.606551-104.815207 253.441223-104.815207 95.864348 0 185.836499 37.254485 253.411547 104.815207C833.200978 329.74098 870.427834 419.742806 870.427834 515.577478 870.427834 611.457176 833.200978 701.459003 765.62593 769.003352" p-id="12057"></path><path d="M750.308059 449.483154c-0.349971-1.566682-0.754177-2.87242-1.192152-3.829212l-39.284725-97.807606c-7.485485-22.370497-29.073152-36.849256-54.923914-36.878932L378.255415 310.967404c-25.532513 0-46.017056 13.768585-53.270251 35.484166l-42.533722 100.507088c-0.233314 0.768503-0.522909 1.841951-0.639566 2.436492-3.25002 10.038634-4.874007 20.410865-4.874007 30.726815 0 26.025747 10.531867 51.254338 28.898167 69.590961l0.115634 144.549164c0 26.982538 21.992897 48.946782 48.975435 48.946782l316.373531-0.202615c27.01119-0.056282 48.946782-22.079878 48.946782-49.033763l-0.059352-139.036613c22.166859-18.7132 34.846646-46.00273 34.846646-75.176167C755.093039 469.662753 753.440399 459.202517 750.308059 449.483154M671.242306 697.541787l-316.314179 0.204661c-1.972934 0-3.538593-1.567705-3.538593-3.483334l-0.116657-119.190613c7.602142 1.683339 15.667841 2.552126 24.13877 2.552126 26.752294-0.086981 52.139497-10.966773 70.505797-30.029944 18.336624 18.889209 43.550888 29.68202 70.301136 29.857005 26.521027-0.232291 51.560306-11.0558 69.808926-29.943986 18.396999 19.063171 43.811832 29.886681 70.767763 29.886681 6.207375-0.060375 12.242835-0.553609 17.986653-1.452071l0.029676 118.059859C674.811598 695.974082 673.186587 697.541787 671.242306 697.541787M682.064792 526.328333c-6.730285 3.684926-15.289218 5.541203-25.329898 5.628184-18.454304 0-35.250852-9.401114-44.680619-24.589025-0.871857-1.842974-2.467191-5.237281-5.454222-8.53028-3.570315-4.018523-10.013051-8.791224-20.543895-8.791224-8.268314 0-16.013719 3.409656-20.62883 8.965186-2.698458 3.060709-4.235464 6.063089-4.960988 7.760754-9.691733 15.667841-26.28669 25.097608-44.276413 25.242917-18.280342-0.11461-34.991955-9.575076-44.450375-24.806989-0.7552-1.566682-2.321882-4.830005-4.758374-7.544837-4.845355-5.78782-12.592806-9.109472-21.297049-9.109472-8.269337 0-15.841803 3.119037-20.077268 8.167007-2.989077 3.322675-4.643764 6.587022-5.368264 8.341992-9.777691 15.696494-26.605961 25.067932-44.88528 25.12626-9.865695 0-18.249643-1.769296-24.951275-5.338588-17.292851-9.197476-28.057009-27.099195-28.057009-46.698578 0-5.889127 0.986467-11.707646 2.929726-17.510816 0.173962-0.462534 0.347924-1.029446 0.290619-1.029446 0 0 0 0.028653-0.058328 0.085958l41.896202-99.055017c0.725524-2.175549 2.089591-6.180769 10.822486-6.180769l276.362258-0.027629c6.440689 0.376577 10.793834 1.666966 12.67774 7.122211l38.764885 96.357582 0.639566 2.64013c1.971911 5.613858 2.960425 11.44568 2.960425 17.2335C709.65722 499.155461 699.067025 516.984524 682.064792 526.328333" p-id="12058"></path></svg></li>
                <li><svg t="1657554052960" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11056" width="26" height="26"><path d="M512 928A416 416 0 1 1 928 512 416 416 0 0 1 512 928z m0-768A352 352 0 1 0 864 512 352 352 0 0 0 512 160z m192 448H512a32 32 0 0 1-32-32V320a32 32 0 0 1 64 0v224H704a32 32 0 0 1 0 64z" fill="#333333" p-id="11057"></path></svg></li>
            </ul>
            <ul class="description">
                <li><router-link class="font" to="/favorites">商品收藏</router-link></li>
                <li><router-link class="font" to="/person/personhome/buyshop">买过的店</router-link></li>
                <li><router-link class="font" to="/favorites/storefavorites">收藏的店</router-link></li>
                <li><router-link class="font" to="/history">我的足迹</router-link></li>
            </ul>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'MenuSwiperBox',
  data () {
    return {
      Imagelist: [
        { id: 1, name: 'phone', url: require('../assets/image/phone.jpg') },
        { id: 2, name: 'computer', url: require('../assets/image/computer.jpg') },
        { id: 3, name: 'electric', url: require('../assets/image/electric.jpg') },
        { id: 4, name: 'car', url: require('../assets//image/car.jpg') },
        { id: 5, name: 'food', url: require('../assets/image/food.jpg') },
        { id: 6, name: 'book', url: require('../assets/image/book.jpg') },
        { id: 7, name: 'clothing', url: require('../assets/image/clothing.jpg') },
        { id: 8, name: 'travel', url: require('../assets/image/travel.jpg') }
      ],
      ImageLength: 8,
      myshop: 0,
      getgoods: 0,
      sendgoods: 0,
      pay: 0,
      assess: 0,
      username: localStorage.username,
      url: '',
      check: ['checked', '', '', '', '', '', '', ''],
      currentimage: 0,
      timer: null
    }
  },
  mounted () {
    this.url = this.Imagelist[0].url
    this.start()
  },
  methods: {
    start () {
      this.timer = setInterval(() => {
        if (this.currentimage === 7) {
          this.currentimage = -1
        }
        this.currentimage = this.currentimage + 1
        this.url = this.Imagelist[this.currentimage].url
        if (this.currentimage === 0) {
          this.check[this.Imagelist.length - 1] = ''
          this.check[this.currentimage] = 'checked'
        } else {
          this.check[this.currentimage - 1] = ''
          this.check[this.currentimage] = 'checked'
        }
        if (this.currentimage === this.Imagelist.length - 1) {
          this.currentimage = -1
        }
      }, 2000)
    },
    iconclick (param) {
      this.check[this.currentimage] = ''
      clearInterval(this.timer)
      this.currentimage = param - 1
      this.check[this.currentimage] = 'checked'
      this.start()
    }
  }
}
</script>

<style lang="less" scoped>
  * {
        margin: 0%;
        padding: 0%;
        font-size: 18px;
      }
      .menuswiper {
        margin-top: 1px;
        background-color: rgb(238, 235, 235);
        min-width: 1024px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 450px;
      }
      .menu{
        height: 100%;
        margin-top: 100px;
      }
      .menu > ul {
        height: 100%;
        display: flex;
        flex-direction: column;
        list-style: none;
        // margin-left: 10px;
      }
      .menu li {
        text-align: center;
        background-color: rgb(66, 62, 62);
        width: 150px;
        height: 41.7px;
        border: 1px rgb(36, 36, 38) solid;
        line-height: 40px;
      }
      .menu li:hover {
        background-color: red;
      }
     .menu a{
        color: white;
        text-decoration: none;
      }
      .swiper{
        position: relative;
        height: 350px;
        width: 610px;
         overflow: hidden;
      }
       .swiper>.image{
        height: 100%;
        width: 100%;
      }
      .swiper img{
        height: 100%;
        width: 100%;
      }
      .swiper>.icon2{
        position: absolute;
        top: 115px;
        padding-top: 2px;
        background-color: rgba(255, 255, 255, 0.8);
      }
      .swiper>.icon3{
        position: absolute;
        top: 115px;
        right: 0px;
        padding-top: 2px;
        background-color: rgba(255, 255, 255, 0.8);
      }
      .swiper>.circle{
        position: absolute;
        bottom: 20px;
        left: 40px;
      }
      .swiper ul{
        list-style: none;
        display: flex;
      }
      .recommend{
        height: 350px;
        width: 280px;
        background-color: white;
        border-bottom: 1px rgb(199, 189, 189) solid;
      }
      .recommend>.picture{
        text-align: center;
        margin-top: 50px;
      }
      .recommend>.account{
        font-size: 16px;
        text-align: center;
        margin-top: 50px;
        margin-bottom: 20px;
      }
      .buy>ul{
        list-style: none;
        display: flex;
        justify-content: space-around;
        // margin-bottom: 5px;
        color: red;
      }
        .recommend a{
          color: red;
          text-decoration: none;
          font-size: 10px;
        }
        .number>li{
          font-size: 15px;
        }
      .record{
        margin-top: 20px;
      }
      .record>ul{
          list-style: none;
          display: flex;
          justify-content: space-around;
        }
        .record .font{
            font-size: 13px;
            color: black;
        }
        // @media screen and (max-width:1024px) {
        //   .menuswiper>.menu{
        //       margin-left: 20px;
        //   }
        //   .menuswiper>.recommend{
        //       margin-right: 20px;
        //   }
        // }
        // @media screen and (min-width:1024px) {
        //    .menuswiper>.menu{
        //       margin-left: 14%;
        //   }
        // }
</style>
