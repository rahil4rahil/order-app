import Vue from 'vue'
import Vuex from 'vuex'
import orderData from '../data/order.JSON'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orders: [],
  },
  mutations: {
    setOrderList: (state, orderList) => {
      state.orders = orderList  // initializing order list
    },
    updateOrderStatus: (state, { orderId, nextStatus }) => {
      let orderIndex = state.orders.findIndex((element) => {
        return element.id == orderId    // finding the index of the order to be updated
      })
      state.orders[orderIndex].status = nextStatus    // updating the status
    }
  },
  getters: {
    getOrderList: (state) => {
      return state.orders   // getting order list from store
    },
    getOrderById: state => orderId => {
      // getting the order by id
      return state.orders.find((item) => {
        return item.id == orderId
      })
    }
  },
  actions: {
    getOrderedData: ({state, commit}, payload) => {
      // Using timeout for resposne delay
      setTimeout(() => {
        commit('setOrderList', orderData)
      }, 2000)
    }
  },
  modules: {
    // Not using module for now since time is limited.
  }
})
