<template>
  <div class="checkout container">
    <form class="checkout-form row">
      <div class="col-12 col-sm-6">
        <label for="name">Nome *</label>
        <input type="text" name="name" id="name" />
      </div>
      <div class="col-12 col-sm-6">
        <label for="cep">CEP *</label>
        <input type="text" name="cep" id="cep" />
      </div>
      <div class="col-12 col-sm-6">
        <label for="email">E-mail *</label>
        <input type="email" name="email" id="email" />
      </div>
      <div class="col-12 col-sm-6">
        <div class="row">
          <div class="col-12 col-sm-8">
            <label for="address">Endereço *</label>
            <input type="text" name="address" id="address" />
          </div>
          <div class="col-12 col-sm-4">
            <label for="number">Número *</label>
            <input type="text" name="number" id="number" />
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6">
        <label for="cpf">CPF *</label>
        <input type="text" name="cpf" id="cpf" />
      </div>
      <div class="col-12 col-sm-6">
        <div class="row">
          <div class="col-12 col-sm-6">
            <label for="complement">Complemento *</label>
            <input type="text" name="complement" id="complement" />
          </div>
          <div class="col-12 col-sm-6">
            <label for="district">Bairro *</label>
            <input type="text" name="district" id="district" />
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6">
        <div class="row">
          <div class="col-12 col-sm-6">
            <label for="birthdate">Data de Nascimento *</label>
            <input type="date" name="birthdate" id="birthdate" />
          </div>
          <div class="col-12 col-sm-6">
            <label for="phone">Telefone *</label>
            <input type="text" name="phone" id="phone" />
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6">
        <div class="row">
          <div class="col-12 col-sm-8">
            <label for="city">Cidade *</label>
            <input type="text" name="city" id="city" />
          </div>
          <div class="col-12 col-sm-4">
            <label for="state">Estado *</label>
            <input type="text" name="state" id="state" />
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