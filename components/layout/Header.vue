<template>
  <header class="header">
    <div class="container">
      <div class="header-logo">
        <NuxtLink to="/">
          <svg
            version="1.2"
            xmlns="http://www.w3.org/2000/svg"
            width="162"
            height="26"
          >
            <path
              d="M-.2 25V1.5h7.7l5.4 12.6 5.4-12.6h7.6V25h-5.7V7.8l-5.4 12.7H11L5.6 7.8V25zm31.7 0V.5h5.7v13.4l6.4-6.5h6.6l-8.6 8.1 9.3 9.5H44l-6.8-7.3V25zM53.4 2.4H59v5h5.8v4H59v7.5q0 1.2.5 1.7.5.4 1.9.4h2.9v4h-4.8q-3.3 0-4.7-1.4-1.4-1.4-1.4-4.7v-7.5h-2.8v-4h2.8z"
              style="fill: #909090"
            />
            <path
              fill-rule="evenodd"
              d="M68.7 25V1.5h10q4.5 0 6.9 2 2.4 2 2.4 5.7t-2.4 5.7q-2.4 2-6.9 2h-4V25zm9.4-19.1h-3.3v6.6h3.3q1.8 0 2.7-.9 1-.8 1-2.4 0-1.6-1-2.4-.9-.9-2.7-.9zM92 25V.5h5.7V25zm27.5-10v10h-5.7v-2.6q-1.1 1.6-2.5 2.3-1.4.8-3.5.8-2.7 0-4.4-1.6-1.7-1.6-1.7-4.2 0-3.1 2.1-4.5 2.1-1.5 6.7-1.5h3.3v-.4q0-1.3-1-2-1.1-.6-3.3-.6-1.8 0-3.4.4-1.5.3-2.9 1.1V7.9q1.8-.5 3.7-.7 1.8-.2 3.6-.2 4.8 0 6.9 1.9 2.1 1.8 2.1 6.1zm-5.7 2.1h-2.9q-1.8 0-2.7.6-.8.6-.8 1.7t.7 1.7q.7.6 2 .6 1.5 0 2.6-1.1 1.1-1.2 1.1-2.9zM138.9 8v4.6q-1.1-.8-2.3-1.2-1.1-.4-2.4-.4-2.3 0-3.6 1.4-1.3 1.4-1.3 3.9 0 2.4 1.3 3.8t3.6 1.4q1.4 0 2.5-.4 1.2-.4 2.2-1.2v4.6q-1.3.5-2.6.8-1.4.2-2.8.2-4.7 0-7.4-2.4-2.7-2.5-2.7-6.8 0-4.4 2.7-6.8 2.7-2.5 7.4-2.5 1.4 0 2.8.3 1.3.2 2.6.7zm22.5 8.2v1.6h-13.2q.2 2 1.4 3 1.3 1 3.5 1 1.7 0 3.6-.6 1.9-.5 3.8-1.6V24q-2 .7-4 1.1-1.9.4-3.9.4-4.8 0-7.5-2.4-2.6-2.5-2.6-6.8t2.6-6.8q2.6-2.5 7.1-2.5 4.2 0 6.7 2.5t2.5 6.7zm-13.1-1.9h7.3q0-1.6-1-2.6-.9-.9-2.4-.9-1.6 0-2.6.9-1.1.9-1.3 2.6z"
              style="fill: #8e36b7"
            />
          </svg>
        </NuxtLink>
      </div>
      <nav class="header-menu">
        <ul class="header-menu-list">
          <li class="header-menu-item">
            <NuxtLink to="/"> Produtos </NuxtLink>
          </li>
          <li class="header-menu-item header-menu-cart">
            <NuxtLink to="/carrinho">
              <svg
                version="1.2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36 36"
                width="35"
                height="35"
              >
                <path
                  d="M11.4 28.1c1.9 0 3.4 1.5 3.4 3.4S13.3 35 11.4 35s-3.5-1.6-3.5-3.5 1.6-3.4 3.5-3.4zM1 .5v3.4h3.5L10.7 17l-2.4 4.2c-.2.5-.4 1.2-.4 1.7 0 1.9 1.6 3.5 3.5 3.5h20.7v-3.5h-20c-.2 0-.4-.2-.4-.3v-.2l1.6-2.9h12.8c1.4 0 2.4-.7 2.9-1.8l6.2-11.2c.4-.3.4-.5.4-.9 0-1-.7-1.7-1.7-1.7H8.3L6.7.5zm27.7 27.6c-1.9 0-3.5 1.5-3.5 3.4s1.6 3.5 3.5 3.5 3.4-1.6 3.4-3.5-1.5-3.4-3.4-3.4zm0 0"
                  fill="#8d35b7"
                />
              </svg>
              <div class="header-menu-cart-badge">
                {{ cartLength }}
              </div>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  computed: {
    cartLength() {
      return this.$store.getters["localStorage/cartLength"];
    },
  },
});
</script>

<style lang="scss">
.header {
  padding: 24px 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &-menu {
    &-list {
      display: flex;
      gap: 22px;
      align-items: center;
      list-style: none;
      margin-bottom: 0;
      padding-left: 0;
    }
    &-item {
      a {
        color: $secondary-color;
        font-weight: 700;

        &:hover {
          text-decoration: none;
          color: $primary-color;
        }
      }
    }
    &-cart {
      a {
        display: flex;
        align-items: flex-end;
      }
      path {
        @include transition;
      }
      &-badge {
        width: 15px;
        height: 15px;
        border-radius: 7px;
        background-color: #ed1c24;
        text-align: center;
        line-height: 15px;
        font-weight: 700;
        font-size: 8px;
        color: #fff;
      }
      &:hover {
        path {
          fill: darken($primary-color, 10%);
        }
      }
    }
  }

  @media (min-width: 768px) {
    padding: 48px 0;

    &-menu {
      &-list {
        gap: 44px;
      }
    }
  }
}
</style>