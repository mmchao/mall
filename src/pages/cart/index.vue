<template>
  <div class="cart">
    <header class="g-header-container">
      <cart-header></cart-header>
    </header>
    <div class="g-content-container">
      <me-scroll ref="scroll">
        <img src="./cart.png" alt="">
      </me-scroll>
    </div>
    
  </div>
</template>

<script>
import CartHeader from './header'
import MeScroll from '@/base/scroll';
export default {
  name: 'Cart',
  components: {
    CartHeader,
    MeScroll
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/scss/mixins";
  .cart {
    overflow:hidden;
    width:100%;
    height:100%;
    background-color: $bgc-theme;
  }
  img {
    width: 100%
  }
</style>