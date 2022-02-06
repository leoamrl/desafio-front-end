<template>
  <div class="container cart">
    <table v-if="this.$store.state.cart.list.length" class="cart-table">
      <thead>
        <tr>
          <td>Produtos</td>
          <td>Quantidade</td>
          <td>Valor Unitário</td>
          <td>Total</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cart" :key="index">
          <td>
            <span class="cart-table-mLabel">Produto:</span>
            <svg
              width="21"
              height="27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.247 3.016h-6.052c-.046-.538-.212-1.448-.78-2.03-.36-.368-.814-.555-1.354-.555H7.752c-.539 0-.995.187-1.352.555-.568.582-.735 1.492-.783 2.03H.431a.43.43 0 1 0 0 .86h.88l.824 19.827c.017.74.478 2.143 2.114 2.143h12.178c1.637 0 2.1-1.403 2.114-2.135l.827-19.835h.88a.428.428 0 0 0 .428-.429.428.428 0 0 0-.429-.431ZM6.462 21.969a.432.432 0 0 1-.863 0V7.755a.43.43 0 1 1 .863 0v14.214Zm4.307 0a.432.432 0 0 1-.862 0V7.755a.43.43 0 1 1 .862 0v14.214Zm4.308 0a.432.432 0 0 1-.863 0V7.755a.43.43 0 1 1 .863 0v14.214ZM7.019 1.586c.192-.198.433-.293.734-.293h4.307c.304 0 .543.095.737.293.347.355.486.978.534 1.43H6.485c.048-.452.187-1.075.534-1.43Z"
                fill="#cfcfcf"
              />
            </svg>
            <div>
              <p class="cart-category">{{ item.category }}</p>
              <p>
                <strong>{{ item.name }}</strong>
              </p>
            </div>
          </td>
          <td>
            <span class="cart-table-mLabel">Quantidade:</span>
            <div class="cart-quantity">
              <button @click="decrementProduct(item.id)">-</button>
              <input type="text" v-model="item.quantity" />
              <button @click="incrementProduct(item.id)">+</button>
            </div>
          </td>
          <td>
            <span class="cart-table-mLabel">Valor Unitário:</span>
            <p>
              <strong>{{ item.price }}</strong> à vista<br />ou 10x R150,00
            </p>
          </td>
          <td>
            <span class="cart-table-mLabel">Total:</span>
            <p>
              <strong>{{ item.price }}</strong> à vista<br />ou 10x R150,00
            </p>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3"><strong>TOTAL À VISTA</strong></td>
          <td>
            <p class="cart-table-total-cash">
              <span>R$ 3000,00</span>
            </p>
          </td>
        </tr>
        <tr>
          <td colspan="3"><strong>TOTAL PARCELADO</strong></td>
          <td>
            <p class="cart-table-total-installment">
              <span>
                em até 10x <strong>R$300,00</strong><br />(Total R$3.000,00)
              </span>
            </p>
          </td>
        </tr>
      </tfoot>
    </table>
    <div v-if="this.$store.state.cart.list.length" class="cart-actions">
      <button class="cart-clean" @click="cleanCart">
        <svg
          width="21"
          height="27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.247 3.016h-6.052c-.046-.538-.212-1.448-.78-2.03-.36-.368-.814-.555-1.354-.555H7.752c-.539 0-.995.187-1.352.555-.568.582-.735 1.492-.783 2.03H.431a.43.43 0 1 0 0 .86h.88l.824 19.827c.017.74.478 2.143 2.114 2.143h12.178c1.637 0 2.1-1.403 2.114-2.135l.827-19.835h.88a.428.428 0 0 0 .428-.429.428.428 0 0 0-.429-.431ZM6.462 21.969a.432.432 0 0 1-.863 0V7.755a.43.43 0 1 1 .863 0v14.214Zm4.307 0a.432.432 0 0 1-.862 0V7.755a.43.43 0 1 1 .862 0v14.214Zm4.308 0a.432.432 0 0 1-.863 0V7.755a.43.43 0 1 1 .863 0v14.214ZM7.019 1.586c.192-.198.433-.293.734-.293h4.307c.304 0 .543.095.737.293.347.355.486.978.534 1.43H6.485c.048-.452.187-1.075.534-1.43Z"
            fill="#cfcfcf"
          />
        </svg>
        Limpar carrinho
      </button>

      <NuxtLink to="/" class="cart-button">Continuar comprando</NuxtLink>
      <NuxtLink to="/checkout" class="cart-button cart-button-checkout">
        Concluir compra
      </NuxtLink>
    </div>
    <div v-if="!this.$store.state.cart.list.length" class="cart-empty">
      <div>
        <h2>Carrinho vazio!</h2>
        <p>Você ainda não adicionou produtos ao carrinho.</p>
      </div>
      <NuxtLink to="/" class="cart-button">Voltar a loja</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

interface Head {
  title: string;
}

export default Vue.extend({
  name: "Cart",
  head(): Head {
    return {
      title: "Carrinho - MktPlace",
    };
  },
  data() {
    return {};
  },
  computed: {
    cart() {
      return this.$store.state.cart.list;
    },
  },
  methods: {
    cleanCart() {
      this.$store.dispatch("cart/cleanCart");
    },
    incrementProduct(id: number) {
      console.log(this.cart);
      this.$store.dispatch("cart/incrementProduct", id);
    },
    decrementProduct(id: number) {
      console.log(this.cart);
      this.$store.dispatch("cart/decrementProduct", id);
    },
  },
});
</script>

<style scoped lang="scss">
.cart {
  padding-top: 50px;
  padding-bottom: 100px;
  &-table {
    color: $tertiary-color;
    width: 100%;

    p {
      font-size: 18px;
      margin-bottom: 0;
    }
    thead {
      td {
        text-transform: uppercase;
        font-weight: 700;
        padding: 26px 0;
        font-size: 18px;

        &:first-child {
          padding-left: 40px;
        }
      }
    }
    tbody {
      border-top: 1px solid #aaa;

      tr {
        border-bottom: 1px solid #aaa;
      }
      td {
        padding: 22px 0 24px;

        &:first-child {
          display: grid;
          align-items: center;
          grid-template-columns: 40px 1fr;
        }
      }
    }
    tfoot {
      border-bottom: 1px solid #aaa;
      tr {
        margin-bottom: 45px;
        align-items: center;
        border-bottom: none;
        &:first-child {
          padding-top: 45px;
        }
      }
    }
    &-mLabel {
      display: none;
      text-transform: uppercase;
      max-width: 120px;
      text-align: left;
      font-weight: 700;
      font-size: 14px;
      color: rgba(#000, 0.7);
    }
    &-total {
      &-cash {
        color: $primary-color;
        font-size: 26px !important;
        font-weight: 700;
      }
      &-installment {
        text-align: center;
      }
    }
  }
  &-category {
    margin-bottom: 0;
    color: $primary-color;
    font-weight: 700;
    font-size: 14px !important;
  }
  &-quantity {
    display: grid;
    grid-template-columns: 22px 56px 22px;
    width: 100px;
    height: 34px;
    border-radius: 2px;
    border: 1px solid $secondary-color;
    button {
      background-color: transparent;
      border: none;
      font-weight: 700;
      color: $secondary-color;
    }
    input {
      width: auto;
      border: none;
      text-align: center;
      border-left: 1px solid $secondary-color;
      border-right: 1px solid $secondary-color;
      color: $tertiary-color;
      font-weight: 700;
      font-size: 18px;
    }
  }
  &-actions {
    display: flex;
    gap: 20px;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding-top: 50px;
  }
  &-clean {
    background-color: transparent;
    border: none;
    color: $tertiary-color;
    font-size: 18px;
    svg {
      margin-right: 15px;
    }
  }
  &-button {
    display: block;
    width: 264px;
    height: 54px;
    border-radius: 3px;
    text-align: center;
    line-height: 54px;
    font-size: 18px;
    background-color: #cfcfcf;
    color: $tertiary-color;

    &:hover {
      text-decoration: none;
      color: $tertiary-color;
      background-color: darken(#cfcfcf, 10%);
    }
    &-checkout {
      background-color: $primary-color;
      color: #fff;

      &:hover {
        color: #fff;
        background-color: darken($primary-color, 10%);
      }
    }
  }
  &-empty {
    margin-top: 40px;
    h2 {
      font-weight: 700;
      color: $primary-color;
    }
  }

  @media (min-width: 768px) {
    &-actions {
      justify-content: end;
      flex-direction: row;
    }
    &-clean {
      margin-right: auto;
    }
    &-empty {
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        margin-bottom: 0;
      }
    }
  }
  @media (min-width: 992px) {
    &-table {
      tbody {
        td {
          &:nth-child(1) {
            min-width: 310px;
          }
          &:nth-child(2) {
            min-width: 290px;
          }
          &:nth-child(3) {
            width: 32%;
          }
          &:nth-child(4) {
            width: 18%;
          }
        }
      }
      tfoot {
        tr {
          padding: 0;
          &:last-child {
            td {
              padding-top: 0;
            }
          }
        }
        td {
          padding: 45px 0;
          &:first-child {
            padding-right: 30px;
            text-align: right !important;
            font-size: 18px;
          }
        }
      }
      &-total {
        &-installment {
          text-align: left;
        }
      }
    }
  }

  @media (max-width: 992px) {
    &-table {
      tr {
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #aaa;
      }
      td {
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-align: right;
      }
      thead {
        display: none;
      }
      tbody {
        tr {
          &:nth-child(even) {
            background-color: rgba(#eee, 0.4);
          }
        }
        td {
          padding-left: 15px;
          padding-right: 15px;
          &:first-child {
            grid-template-columns: 120px 30px 1fr;
          }

          &:not(:last-child) {
            border-bottom: 1px solid #aaa;
          }
        }
      }

      &-mLabel {
        display: block;
      }
    }
  }
}
</style>