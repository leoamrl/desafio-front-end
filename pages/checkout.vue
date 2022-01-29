<template>
  <div class="checkout container">
    <form class="checkout-form row">
      <div class="col-12 col-sm-6">
        <label for="name">Nome *</label>
        <input required type="text" name="name" id="name" />
      </div>
      <div class="col-12 col-sm-6">
        <label for="cep">CEP *</label>
        <input
          required
          type="text"
          name="cep"
          v-model="cep"
          v-on:blur="handleBlur"
          id="cep"
        />
      </div>
      <div class="col-12 col-sm-6">
        <label for="email">E-mail *</label>
        <input required type="email" name="email" id="email" />
      </div>
      <div class="col-12 col-sm-6">
        <div class="row">
          <div class="col-12 col-sm-8">
            <label for="address">Endereço *</label>
            <input
              required
              type="text"
              name="address"
              v-model="address"
              id="address"
            />
          </div>
          <div class="col-12 col-sm-4">
            <label for="number">Número *</label>
            <input required type="text" name="number" id="number" />
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6">
        <label for="cpf">CPF *</label>
        <input required type="text" name="cpf" id="cpf" />
      </div>
      <div class="col-12 col-sm-6">
        <div class="row">
          <div class="col-12 col-sm-6">
            <label for="complement">Complemento *</label>
            <input required type="text" name="complement" id="complement" />
          </div>
          <div class="col-12 col-sm-6">
            <label for="district">Bairro *</label>
            <input
              required
              type="text"
              name="district"
              v-model="district"
              id="district"
            />
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6">
        <div class="row">
          <div class="col-12 col-sm-6">
            <label for="birthdate">Data de Nascimento *</label>
            <input required type="date" name="birthdate" id="birthdate" />
          </div>
          <div class="col-12 col-sm-6">
            <label for="phone">Telefone *</label>
            <input required type="text" name="phone" id="phone" />
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6">
        <div class="row">
          <div class="col-12 col-sm-8">
            <label for="city">Cidade *</label>
            <input required type="text" v-model="city" name="city" id="city" />
          </div>
          <div class="col-12 col-sm-4">
            <label for="state">Estado *</label>
            <input
              required
              type="text"
              v-model="state"
              name="state"
              id="state"
            />
          </div>
        </div>
      </div>
      <div class="col-12 d-flex">
        <button class="button">Concluir compra</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

interface Head {
  title: string;
}

export default Vue.extend({
  name: "Checkout",
  head(): Head {
    return {
      title: "Checkout - MktPlace",
    };
  },
  data() {
    return {
      cep: "",
      address: "",
      district: "",
      city: "",
      state: "",
    };
  },
  methods: {
    async handleBlur(e: Event) {
      const api = "https://viacep.com.br/ws/" + this.cep + "/json/";
      const cepData = await this.$axios.$get(api);
      this.address = cepData.logradouro;
      this.district = cepData.bairro;
      this.city = cepData.localidade;
      this.state = cepData.uf;
    },
  },
});
</script>

<style lang="scss">
.checkout {
  padding-top: 80px;
  padding-bottom: 80px;

  label {
    font-size: 18px;
    color: $tertiary-color;
  }
  input {
    width: 100%;
    height: 46px;
    padding-left: 16px;
    border-radius: 3px;
    margin-bottom: 35px;
    border: 1px solid $secondary-color;
  }
  .button {
    width: 100%;
    max-width: 360px;
    height: 54px;
    border-radius: 3px;
    border: none;
    line-height: 54px;
    font-size: 18px;
    background-color: $primary-color;
    color: #fff;
    margin-left: auto;

    &:hover {
      text-decoration: none;
      color: #fff;
      background-color: darken($primary-color, 10%);
    }
  }
}
</style>