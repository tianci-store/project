/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-07 23:13:47
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-16 11:08:50
 * @FilePath: \web开发项目\shop_client\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeNo from '../components/Home_no.vue'
import Login from '../views/Login_t.vue'
import Register from '../views/Register_t.vue'
import Home from '../components/HomeBox.vue'
import PersonCenter from '../views/PersonCenter_t.vue'
import MyShop from '../views/MyShop_t.vue'
import CustomerService from '../views/CustomerService_t.vue'
import Manager from '../views/ManagerAccess_t.vue'
import Phone from '../views/Phone_t.vue'
import Computer from '../views/Computer_t.vue'
import Electric from '../views/Electric_t.vue'
import Car from '../views/Car_t.vue'
import Food from '../views/Food_t.vue'
import Book from '../views/Book_t.vue'
import Clothing from '../views/Clothing_t.vue'
import Travel from '../views/Travel_t.vue'
import GoodsFavorites from '../views/GoodsFavorites.vue'
import StoreFavorites from '../views/StoreFavorites.vue'
import MyHistory from '../views/MyHistory_t.vue'
import Favorites from '../views/Favorites.vue'
import Classify from '../views/Classify.vue'
import OpenStore from '../views/OpenStore.vue'
import WaitGet from '../views/WaitGet.vue'
import WaitSend from '../views/WaitSend.vue'
import WaitPay from '../views/WaitPay.vue'
import WaitAssess from '../views/WaitAssess.vue'
import PersonHome from '../views/PersonHome.vue'
import MyInfromation from '../views/MyInformation.vue'
import ShopInformation from '../views/ShopInformation.vue'
import BuyGoods from '../views/BuyGoods.vue'
import BuyShop from '../views/BuyShop.vue'
import ModifyInfromation from '../views/ModifyInformation.vue'
import Address from '../views/Address.vue'
import Refund from '../views/Refund.vue'
import AllOrder from '../views/AllOrder.vue'
import Infromation from '../views/Information.vue'
import ModifyPassword from '../views/ModifyPassword.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home_no', component: HomeNo },
  { path: '/login', name: 'lonin', component: Login },
  { path: '/register', name: 'register', component: Register },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      gorouter: true // 需要权限
    }
  },
  {
    path: '/person',
    // name: 'person',
    component: PersonCenter,
    meta: {
      gorouter: true // 需要权限
    },
    children: [
      {
        path: '',
        // name: 'personhome',
        component: PersonHome,
        meta: {
          gorouter: true // 需要权限
        },
        children: [
          {
            path: '',
            name: 'shopinformation',
            component: ShopInformation,
            meta: {
              gorouter: true // 需要权限
            }
          },
          {
            path: '/person/personhome/buygoods',
            // name: 'buygoods',
            component: BuyGoods,
            meta: {
              gorouter: true // 需要权限
            },
            children: [
              {
                path: '',
                name: 'allorder',
                component: AllOrder,
                meta: {
                  gorouter: true // 需要权限
                }
              },
              {
                path: '/person/personhome/buygoods/wait_get',
                name: 'waitget',
                component: WaitGet,
                meta: {
                  gorouter: true // 需要权限
                }
              },
              {
                path: '/person/personhome/buygoods/wait_send',
                name: 'waitsend',
                component: WaitSend,
                meta: {
                  gorouter: true // 需要权限
                }
              },
              {
                path: '/person/personhome/buygoods/wait_pay',
                name: 'waitpay',
                component: WaitPay,
                meta: {
                  gorouter: true // 需要权限
                }
              },
              {
                path: '/person/personhome/buygoods/wait_assess',
                name: 'waitassess',
                component: WaitAssess,
                meta: {
                  gorouter: true // 需要权限
                }
              }
            ]
          },
          {
            path: '/person/personhome/buyshop',
            name: 'buyshop',
            component: BuyShop,
            meta: {
              gorouter: true // 需要权限
            }
          },
          {
            path: '/person/personhome/refund',
            name: 'refund',
            component: Refund,
            meta: {
              gorouter: true // 需要权限
            }
          }
        ]
      },
      {
        path: '/person/myinformation',
        // name: 'myinformation',
        component: MyInfromation,
        meta: {
          gorouter: true // 需要权限
        },
        children: [
          {
            path: '',
            name: 'information',
            component: Infromation,
            meta: {
              gorouter: true // 需要权限
            }
          },
          {
            path: '/person/myinformation/modifyinformation',
            name: 'modifyinformation',
            component: ModifyInfromation,
            meta: {
              gorouter: true // 需要权限
            }
          },
          {
            path: '/person/myinformation/address',
            name: 'address',
            component: Address,
            meta: {
              gorouter: true // 需要权限
            }
          },
          {
            path: '/person/myinformation/modifypassword',
            name: 'modifypassword',
            component: ModifyPassword,
            meta: {
              gorouter: true // 需要权限
            }
          }
        ]
      }
    ]
  },
  {
    path: '/favorites',
    // name: 'favorites',
    component: Favorites,
    meta: {
      gorouter: true // 需要权限
    },
    children: [
      {
        path: '',
        name: 'goodsfavorites',
        component: GoodsFavorites,
        meta: {
          gorouter: true // 需要权限
        }
      },
      {
        path: '/favorites/storefavorites',
        name: 'storefavorites',
        component: StoreFavorites,
        meta: {
          gorouter: true // 需要权限
        }
      }
    ]
  },
  {
    path: '/classify',
    name: 'classify',
    component: Classify,
    meta: {
      gorouter: true // 需要权限
    }
  },
  {
    path: '/openstore',
    name: 'openstore',
    component: OpenStore,
    meta: {
      gorouter: true // 需要权限
    }
  },
  {
    path: '/my_shop',
    name: 'my_shop',
    component: MyShop,
    meta: {
      gorouter: true // 需要权限
    }
  },
  {
    path: '/customer_service',
    name: 'customer_service',
    component: CustomerService,
    meta: {
      gorouter: true // 需要权限
    }
  },
  {
    path: '/manager',
    name: 'manager',
    component: Manager,
    meta: {
      gorouter: true // 需要权限
    }
  },
  {
    path: '/phone',
    name: 'phone',
    component: Phone,
    meta: {
      gorouter: true // 需要权限
    }
  },
  {
    path: '/computer',
    name: 'computer',
    component: Computer,
    meta: {
      gorouter: true // 需要权限
    }
  },
  {
    path: '/electric',
    name: 'electric',
    component: Electric,
    meta: {
      gorouter: true // 需要权限
    }
  },
  {
    path: '/car',
    name: 'car',
    component: Car,
    meta: {
      gorouter: true // 需要权限
    }
  },
  {
    path: '/food',
    name: 'food',
    component: Food,
    meta: {
      gorouter: true // 需要权限
    }
  },
  {
    path: '/book',
    name: 'book',
    component: Book,
    meta: {
      gorouter: true // 需要权限
    }
  },
  {
    path: '/clothing',
    name: 'clothing',
    component: Clothing,
    meta: {
      gorouter: true // 需要权限
    }
  },
  {
    path: '/tarvel',
    name: 'travel',
    component: Travel,
    meta: {
      gorouter: true // 需要权限
    }
  },
  {
    path: '/history',
    name: 'history',
    component: MyHistory,
    meta: {
      gorouter: true // 需要权限
    }
  }
]
const router = new VueRouter({
  mode: 'hash',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.gorouter) {
    // localStorage.token = undefined
    // console.log(localStorage.token, localStorage.IsLogin)
    if (localStorage.token !== undefined && localStorage.IsLogin !== undefined) {
      // console.log(localStorage.token + 'qqqqq')
      next()
    } else {
      next('/login')
    }
  } else {
    if (to.name === 'home_no') {
      if (localStorage.token !== undefined && localStorage.IsLogin !== undefined) {
        next('/home')
      } else {
        next()
      }
    } else {
      next()
    }
  }
})

export default router
