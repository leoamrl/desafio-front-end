<template>
  <article class="product">
    <figure class="product-figure">
      <img :src="product.imageUrl" alt="" class="img-fluid defer" />
    </figure>
    <div class="product-content">
      <p class="product-category">{{ product.category }}</p>
      <h1 class="product-title">{{ product.name }}</h1>
      <p class="product-description">
        {{ product.description }}
      </p>
      <h2 class="product-price">R$ {{ formatPrice }}</h2>
    </div>
    <button class="product-addcart" v-on:click="addCart(product)">
      Adicionar ao carrinho
    </button>
  </article>
</template>

<script lang="ts">
import Vue from "vue";
declare interface Cart {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  imageUrl: string;
  quantity: number;
}
export default Vue.extend({
  props: {
    product: Object,
  },
  methods: {
    addCart(product: Object) {
      this.$store.dispatch("localStorage/addProduct", product);
    },
  },
  computed: {
    formatPrice() {
      const formattedPrice = this.product.price
        .toFixed(2)
        .toString()
        .replace(".", ",");
      return formattedPrice;
    },
  },
});
</script>

<style lang="scss">
.product {
  margin-bottom: 62px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  &-figure {
    background-color: #eee;
    height: 250px;

    .img-fluid {
      height: 250px;
      display: block;
      margin: 0 auto;
      mix-blend-mode: multiply;
    }
  }
  &-content {
    padding: 30px;
  }
  &-category {
    margin-bottom: 20px;
    color: $primary-color;
    line-height: 100%;
    font-weight: 700;
    font-size: 14px;
  }
  &-title {
    margin-bottom: 10px;
    color: $tertiary-color;
    font-weight: 700;
    font-size: 18px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  &-description {
    height: 48px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 20px;
    color: $secondary-color;
    font-size: 16px;
  }
  &-price {
    margin-bottom: 0;
    color: $tertiary-color;
    font-weight: 700;
    font-size: 25px;
  }
  &-addcart {
    width: 100%;
    height: 58px;
    border: none;
    background-color: transparent;
    border-top: 1px solid #aaa;
    text-transform: uppercase;
    color: $primary-color;
    text-align: center;
    line-height: 58px;
    font-weight: 700;
    font-size: 18px;
    @include transition;

    &:hover {
      background-color: $primary-color;
      color: #fff;
    }
  }
}
</style>