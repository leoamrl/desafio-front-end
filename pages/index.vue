<template>
  <div>
    <IndexSlider />
    <div class="container">
      <IndexSearchForm v-on:postSearch="handleSearch" />
      <ul class="products row gy-6">
        <li
          class="col-12 col-sm-6 col-lg-4"
          v-for="product in filteredProducts"
          :key="product.id"
        >
          <IndexProductItem :product="product" />
        </li>
        <li v-if="!this.filteredProducts.length" class="col-12 products-error">
          Nenhum produto encontrado.
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Context } from "@nuxt/types";
import Vue from "vue";

interface Head {
  title: string;
}

export default Vue.extend({
  name: "Default",
  head(): Head {
    return {
      title: "Home - MktPlace",
    };
  },
  data() {
    return {
      products: [],
      error: "",
      search: "",
    };
  },
  async asyncData({ $axios }: Context) {
    try {
      const api =
        "https://raw.githubusercontent.com/owInteractive/desafio-frontend-2020/master/produtos.json";
      const products = await $axios.$get(api);
      return { products };
    } catch (error) {
      return { error };
    }
  },
  methods: {
    handleSearch(value: string) {
      this.search = value;
    },
  },
  computed: {
    filteredProducts: function (): object {
      return this.products.filter((product: any) => {
        return product.name.toLowerCase().match(this.search.toLowerCase());
      });
    },
  },
});
</script>

<style lang="scss">
.products {
  padding: 0;
  list-style: none;

  &-error {
    margin-bottom: 60px;
  }
}
</style>