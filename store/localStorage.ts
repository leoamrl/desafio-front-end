import Vue from 'vue';
import { State, Getters, Mutations, MutationsInterface } from './types';

export const strict = true;

export const state = (): State => ({
  list: []
})

export const getters: Getters = {
  cartLength: (state) => {
    const totalLength = state.list.reduce((total, item: any) => {
      return total + (item.quantity)
    }, 0)
    return totalLength
  },
  cartList: (state) => {
    return state.list
  },
  cartTotal: (state) => {
    const totalPrice = state.list.reduce((total, item: any) => {
      return total + (item.price * item.quantity)
    }, 0)
    return totalPrice.toFixed(2).replace('.', ',')
  },
  cartTotalInstallment: (state: State, getters: any) => {
    const cartInstallment = +getters.cartTotal.replace(',', '.') / 10
    return cartInstallment.toFixed(2).replace('.', ',')
  }
}

export const mutations: MutationsInterface = {
  ADD_PRODUCT(state: any, productAdded: any) {
    let itemExists = state.list.indexOf(productAdded) != -1;

    if (itemExists) {
      const indexProduct = state.list.findIndex((item: any) => {
        return item.id == productAdded.id
      })

      if (indexProduct >= 0) {
        if (state.list[indexProduct].quantity) {
          state.list[indexProduct].quantity++
        }
      }

      return
    }
    productAdded.quantity = 1
    return state.list.push(productAdded)
  },
  DECREMENT_PRODUCT(state: any, productId) {
    const indexProduct = state.list.findIndex((item: any) => {
      return item.id == productId
    })
    const item = state.list[indexProduct];

    if (item.quantity == 1) {
      return state.list.splice(indexProduct, 1)
    }
    item.quantity -= 1

    Vue.set(state.list, indexProduct, item)
  },
  INCREMENT_PRODUCT(state: any, productId) {
    const indexProduct = state.list.findIndex((item: any) => {
      return item.id == productId
    })
    const item = state.list[indexProduct];
    item.quantity += 1

    Vue.set(state.list, indexProduct, item)
  },
  REMOVE_PRODUCT(state, productId) {
    const indexProduct = state.list.findIndex((item: any) => {
      return item.id == productId
    })
    return state.list.splice(indexProduct, 1)
  },
  CLEAN_CART(state) {
    return state.list = []
  },
}

export const actions = {
  addProduct({ commit }: any, item: object) {
    commit('ADD_PRODUCT', item)
  },
  decrementProduct({ commit }: any, id: object) {
    commit('DECREMENT_PRODUCT', id)
  },
  incrementProduct({ commit }: any, id: object) {
    commit('INCREMENT_PRODUCT', id)
  },
  removeProduct({ commit }: any, id: object) {
    commit('REMOVE_PRODUCT', id)
  },
  cleanCart({ commit }: any) {
    commit('CLEAN_CART')
  }
}