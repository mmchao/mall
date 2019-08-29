<template>
  <transition name="product">
    <div class="product" v-if="show">
        <header class="g-header-container">
          <product-header></product-header>
        </header>
        <me-loading v-if="!fetchFinsh"></me-loading>
        <div class="product-wrapper" v-else>
          <me-scroll ref="scroll">
            <product-slider :sliders="sliders"/>
            <div class="product-price">
              <div class="price">￥<span class="price-num">{{price}}</span></div>
              <div class="sales-num">{{salesNum}}件已售</div>
            </div>
            <div class="product-title">{{title}}</div>
            <div class="product-other-info">
              <div class="delivery">快递包邮</div>
              <div class="month-sale">月销量 {{salesNum}}件</div>
              <div class="area">{{area}}</div>
            </div>
            <div class="product-comment">
              <div>商品评价 ({{comment.totalCount}})</div>
              <ul class="keywords-list" >
                  <li class="keyword" v-for="(item, index) in comment.keywords" :key="index">
                    {{item.word}}({{item.count}})
                  </li>
              </ul>
              <div class="first-comment">
                <div class="user">
                  <img class="head-pic" :src="comment.rateList[0].headPic" alt="">
                  {{comment.rateList[0].userName}}
                </div>
                <div class="content">{{comment.rateList[0].content}}</div>
                <div class="order-info">{{comment.rateList[0].dateTime}} {{comment.rateList[0].skuInfo}}</div>
              </div>
            </div>
            <div class="seller">
              <div class="title">
                <div class="shop-icon"><img :src="seller.shopIcon" alt=""></div>
                <div class="shop-name">
                  <div class="nick">{{seller.sellerNick}}</div>
                  <div class="credit"><img :src="seller.creditLevelIcon" alt=""></div>
                </div>
              </div>
              <ul class="evaluates-list">
                <li class="item" v-for="(item, index) in seller.evaluates" :key="index">
                  {{item.title}} {{item.score}}
                </li>
              </ul>
            </div>
          </me-scroll>
        </div>
        <footer class="g-footer-container">
          <div class="icon-wraper">
            <div class="icon-container">
              <i class="iconfont icon-shop"></i>
              <div class="icontext">店铺</div>
            </div>
            <div class="icon-container">
              <i class="iconfont icon-service"></i>
              <div class="icontext">客服</div>
            </div>
            <div class="icon-container">
              <i class="iconfont icon-collect"></i>
              <div class="icontext">收藏</div>
            </div>
          </div>
          <div class="btn">
            <div class="add-cart">加入购物车</div>
            <div class="buy">马上抢</div>
          </div>
        </footer>
      </div>
  </transition>
</template>

<script>
import ProductHeader from './header'
import ProductSlider from './slider'
import MeLoading from '@/base/loading'
import MeScroll from '@/base/scroll';
import {getProductDetail} from '@/api/product'
import { resolve } from 'q';
export default {
   name: 'Product',
   components: {
     ProductHeader,
     ProductSlider,
     MeLoading,
     MeScroll
   },
   data() {
     return {
      //  product:{}, 不需要监听变化 可以不放在data里面
      show: false,
      fetchFinsh: false

     }
   },
   created() {
     this.getProduct()
   },
   mounted() {
     this.show = true // 动画实现
   },
   methods: {
     getProduct() {
      return getProductDetail(this.$route.params.id).then(res => {
        // return new Promise(resolve => {
          const product = res.data
          const apiStack = JSON.parse(product.apiStack[0].value)
          console.log(product)
          console.log(apiStack)
      
          this.sliders = product.item.images   // 幻灯片
          this.title = product.item.title // 名称
          this.price = apiStack.price.price.priceText // 
          this.salesNum = apiStack.item.sellCount // 销量
          this.area = apiStack.delivery.from // 地区
          
          // 评价
          const { totalCount, keywords, rateList } = product.rate
          this.comment = { totalCount, keywords, rateList }

          // 卖家
          const { shopIcon, sellerNick, creditLevelIcon, evaluates } = product.seller
          this.seller = { shopIcon, sellerNick, creditLevelIcon, evaluates }

          
          this.fetchFinsh = true
          // resolve()
        // })
      })
     }
   }
}
</script>

<style lang="scss" scoped>
 @import "~@/assets/scss/mixins";
  .product-enter-active,
  .product-leave-active {
      transition: all 0.3s;
  }
  .product-enter,
  .product-leave-to {
     transform: translate3d(100%, 0, 0);
  }

 .product {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    z-index: $product-z-index;
    width: 100%;
    height: 100%;
    background-color: $bgc-theme;
  }
  .product-wrapper {
    height: 100%; // 不设置滚动条不出现
  }
  .product-price{
    @include flex-between();
    height: 40px;
    background: linear-gradient(to right,#ef338f, #ef3648) ;
    color: #fff;
    padding: 0 10px;
    border-top: .5px solid $border-color;
    .price-num {
      font-size: 18px;
    }
    
    .sales-num {
      background: #cc2e46;
      padding: 6px 10px;
      border-radius: 3px
    }
  }
  .product-title {
    padding:10px;
    line-height: 150%;
    font-weight: bold;
    font-size: 13px;
    background-color: #fff;
  }

  .product-other-info {
    @include flex-between();
    padding: 5px 10px;
    font-size: 12px;
    color: #999;
    background-color: #fff;

  }
  .product-comment {
    margin: 10px 0;
    background: #fff;
    padding: 10px;
  }
  .keywords-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px
  }
  .keyword {
    padding: 8px 10px;
    background: #ffeeee;
    margin-right: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  .first-comment{
    .user {
      line-height: 30px;
      .head-pic {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 5px;
      }
    }
    .content {
      margin: 10px 0;
      line-height: 150%;
    }
    .order-info {
      line-height: 150%;
      color: #999
    }
  }
  .seller{
    background-color: #fff;
    padding: 10px;
    margin-bottom: 50px;
    .title {
      display: flex;
      .shop-icon img {
        width: 50px;
        height: 50px;
      }
      .shop-name {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .nick {
          font-size: 14px;
          margin-bottom: 5px
        }
        .credit  img{
          width: 35px;
        }
      }
    }
    .evaluates-list {
      display: flex;
      justify-content: space-around;
      color: #999;
      margin: 20px 0;
    }
  }
  .g-footer-container {
    display: flex;
    background-color: #fff;
    height: 50px;
    align-items: center;
    text-align: center;
    .icon-wraper{
      width: 40%;
      display: flex;
      justify-content: space-around
    }
    .btn {
      width: 60%;
      display: flex;
      height: 100%;
      color: #fff;
      .add-cart {
        width: 50%;
        background: #ff9500;
        height: 100%;
        line-height: 50px
      }
      .buy {
        width: 50%;background: #ff0036;
        height: 100%;
        line-height: 50px
      }
    }
    .icontext {
      margin-top: 5px;
      font-size: 12px;
    }
  }
  
</style>