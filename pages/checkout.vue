<template>
  <div class="checkout container">
    <form class="checkout-form row">
      <div class="col-12 col-sm-6">
        <label for="name">Nome *</label>
        <validation-provider rules="required" v-slot="{ errors }">
          <input type="text" v-model="name" name="name" id="name" />
          <span class="checkout-form-error">{{ errors[0] }}</span>
        </validation-provider>
      </div>
      <div class="col-12 col-sm-6">
        <label for="cep">CEP *</label>
        <validation-provider rules="required" v-slot="{ errors }">
          <input
            type="tel"
            name="cep"
            v-model="cep"
            v-on:blur="getCep"
            id="cep"
          />
          <span class="checkout-form-error">{{ errors[0] }}</span>
        </validation-provider>
      </div>
      <div class="col-12 col-sm-6">
        <label for="email">E-mail *</label>
        <validation-provider rules="required" v-slot="{ errors }">
          <input v-model="email" type="email" name="email" id="email" />
          <span class="checkout-form-error">{{ errors[0] }}</span>
        </validation-provider>
      </div>
      <div class="col-12 col-sm-6">
        <div class="row">
          <div class="col-12 col-sm-8">
            <label for="address">Endereço *</label>
            <validation-provider rules="required" v-slot="{ errors }">
              <input
                type="text"
                name="address"
                v-model="address"
                id="address"
              />
              <span class="checkout-form-error">{{ errors[0] }}</span>
            </validation-provider>
          </div>
          <div class="col-12 col-sm-4">
            <label for="number">Número *</label>
            <validation-provider
              rules="required"
              v-model="number"
              v-slot="{ errors }"
            >
              <input type="text" v-model="number" name="number" id="number" />
              <span class="checkout-form-error">{{ errors[0] }}</span>
            </validation-provider>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6">
        <label for="cpf">CPF *</label>
        <validation-provider rules="required" v-slot="{ errors }">
          <input v-model="cpf" type="text" name="cpf" id="cpf" />
          <span class="checkout-form-error">{{ errors[0] }}</span>
        </validation-provider>
      </div>
      <div class="col-12 col-sm-6">
        <div class="row">
          <div class="col-12 col-sm-6">
            <label for="complement">Complemento *</label>
            <validation-provider rules="required" v-slot="{ errors }">
              <input
                v-model="complement"
                type="text"
                name="complement"
                id="complement"
              />
              <span class="checkout-form-error">{{ errors[0] }}</span>
            </validation-provider>
          </div>
          <div class="col-12 col-sm-6">
            <label for="district">Bairro *</label>
            <validation-provider rules="required" v-slot="{ errors }">
              <input
                type="text"
                name="district"
                v-model="district"
                id="district"
              />
              <span class="checkout-form-error">{{ errors[0] }}</span>
            </validation-provider>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6">
        <div class="row">
          <div class="col-12 col-sm-6">
            <label for="birthdate">Data de Nascimento *</label>
            <validation-provider rules="required" v-slot="{ errors }">
              <input
                v-model="birthdate"
                type="date"
                name="birthdate"
                id="birthdate"
              />
              <span class="checkout-form-error">{{ errors[0] }}</span>
            </validation-provider>
          </div>
          <div class="col-12 col-sm-6">
            <label for="phone">Telefone *</label>
            <validation-provider rules="required" v-slot="{ errors }">
              <input v-model="phone" type="text" name="phone" id="phone" />
              <span class="checkout-form-error">{{ errors[0] }}</span>
            </validation-provider>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6">
        <div class="row">
          <div class="col-12 col-sm-8">
            <label for="city">Cidade *</label>
            <validation-provider rules="required" v-slot="{ errors }">
              <input type="text" v-model="city" name="city" id="city" />
              <span class="checkout-form-error">{{ errors[0] }}</span>
            </validation-provider>
          </div>
          <div class="col-12 col-sm-4">
            <label for="state">Estado *</label>
            <validation-provider rules="required" v-slot="{ errors }">
              <input type="text" v-model="state" name="state" id="state" />
              <span class="checkout-form-error">{{ errors[0] }}</span>
            </validation-provider>
          </div>
        </div>
      </div>
      <div class="col-12 d-flex">
        <button class="button" v-on:click.prevent="handleCheckout">
          Concluir compra
        </button>
      </div>
    </form>
    <CheckoutSuccess></CheckoutSuccess>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { ValidationProvider, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "This field is required",
});

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
  components: {
    ValidationProvider,
  },
  data() {
    return {
      name: "",
      cep: "",
      email: "",
      address: "",
      number: "",
      cpf: "",
      complement: "",
      district: "",
      birthdate: "",
      phone: "",
      city: "",
      state: "",
    };
  },
  methods: {
    async getCep() {
      if (this.cep.length == 8) {
        try {
          const api = `https://viacep.com.br/ws/${this.cep.replace(
            /\D/g,
            ""
          )}/json/`;
          const cepData = await this.$axios.$get(api);
          this.address = cepData.logradouro;
          this.district = cepData.bairro;
          this.city = cepData.localidade;
          this.state = cepData.uf;
        } catch (err) {
          console.log(err);
        }
      }
    },
    handleCheckout(): void {
      console.log("test");
    },
  },
});
</script>

<style lang="scss">
.checkout {
  padding-top: 30px;
  padding-bottom: 80px;

  label {
    margin-top: 35px;
    font-size: 18px;
    color: $tertiary-color;
  }
  input {
    width: 100%;
    height: 46px;
    padding-left: 16px;
    border-radius: 3px;

    border: 1px solid $secondary-color;
  }
  .button {
    width: 100%;
    max-width: 360px;
    height: 54px;
    border-radius: 3px;
    margin-top: 35px;
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
  &-form {
    &-error {
      font-size: 12px;
      color: red;
    }
  }
}
</style>