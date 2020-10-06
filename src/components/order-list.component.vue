<template>
  <div>
    <v-row v-if="ordersLength != 0">
      <v-col class="col-12"><p class="text-h4">Orders Received</p></v-col>
      <v-col class="col-12">
        <v-list>
          <v-list-item-group v-model="model">
            <v-list-item
              v-for="(item, i) in orders"
              :key="i"
              @click="handleClick(item)"
            >
              <v-list-item-icon>
                <v-img
                  :src="require(`@/assets/${item.image}.png`)"
                  class="order-thumnail"
                  width="60"
                ></v-img>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="text-h5"
                  ><span>{{ item.text }}</span
                  ><span class="float-right"
                    ><v-btn v-if="item.status != 'Ready to serve'" elevation="0" class="text-capitalize" @click="handleUpdateStatus($event, item)"
                      >Update Status</v-btn
                    ></span
                  ></v-list-item-title
                >
                <v-list-item-subtitle
                  v-text="item.status"
                  class="text-h7"
                ></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
    <v-row class="justify-center" v-else> 
        <v-col class="col-12 text-center">
          <v-progress-circular
          :size="70"
          :width="7"
          color="orange"
          indeterminate
        ></v-progress-circular>
        </v-col>
        <v-col class="col-12 text-center">
          <p>Loading Orders ...</p>
        </v-col>
      </v-row>
  </div>
  
</template>

<script>
export default {  
  data() {
    return {
      model: undefined,
    };
  },
  computed: {
    orders() {
      return this.$store.getters.getOrderList;
    },
    ordersLength() {
      return this.orders.length
    }
  },
  methods: {
    handleClick(item) {
      //navigating to Order Detail page
      this.$router.push({ path: `/order/${item.id}` });
    },
    handleUpdateStatus(event, item) {
      console.log(item)
        // Setting the current status to next status
      if (item.status == 'Ready') {
      
        this.$store.commit('updateOrderStatus', { orderId: item.id, nextStatus: 'Ready to serve' })
      }
      else if (item.status == 'Order Received') {
        this.$store.commit('updateOrderStatus', { orderId: item.id, nextStatus: 'Ready' })
      }
      event.stopPropagation();
    }
  },
};
</script>

<style>
.order-thumnail {
  border-radius: 50%;
}
</style>