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
      return state.orders
    },
    getOrderById: state => orderId => {
      return state.orders.find((item) => {
        return item.id == orderId
      })
    }
  },
  actions: {
    getOrderedData: ({state, commit}, payload) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('setOrderList', orderData)
        }, 2000)
      })
    }
  },
  modules: {
  }
})
