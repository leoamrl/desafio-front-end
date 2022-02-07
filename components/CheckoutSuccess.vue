<template>
  <div class="modal">
    <div class="modal-overlay" @click="closeModal()"></div>
    <div class="modal-content">
      <div class="modal-close" @click="closeModal()">x</div>
      <div class="modal-icon">
        <img src="~/assets/images/confirmed.png" alt="" />
      </div>
      <h2>Seu cadastro foi solicitado com sucesso!</h2>
      <NuxtLink to="/">
        <svg
          width="20"
          height="13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#a)">
            <path
              d="M19.075 5.35H2.947l3.848-3.848a.862.862 0 1 0-1.22-1.22L.253 5.602a.863.863 0 0 0 0 1.22l5.322 5.323a.86.86 0 0 0 1.22 0 .863.863 0 0 0 0-1.22l-3.848-3.85h16.128a.863.863 0 0 0 0-1.725Z"
              fill="#8E36B7"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h20v12.461H0z" />
            </clipPath>
          </defs>
        </svg>
        Voltar para home
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      viewModal: true,
    };
  },
  methods: {
    closeModal() {
      this.$emit("closeModal", this.viewModal);
    },
  },
});
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex !important;
  align-items: center;
  justify-content: center;
  z-index: 100;

  &-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(#000, 0.8);
  }

  &-content {
    text-align: center;
    max-width: 550px;
    height: auto;
    width: 100%;
    border-radius: 3px;
    padding: 75px 0 55px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;

    h2 {
      margin-bottom: 30px;
      color: #545454;
      font-weight: 400;
      font-size: 26px;
    }
    svg {
      width: 30px;
    }
    a {
      text-transform: uppercase;
      color: $primary-color;

      &:hover {
        color: $primary-color;
      }
    }
  }
  &-close {
    position: absolute;
    top: 0;
    right: 15px;
    font-size: 25px;
    cursor: pointer;
  }
  &-icon {
    margin-bottom: 30px;
  }
}
</style>