<template>
    <v-container>
      <v-row align="center" v-if="orderDetail">
        <v-col class="col-12 pb-0"
          ><p class="text-h4">
            <span>Order {{ `#${this.orderId}` }}</span>
            <span class="float-right subtitle-2 pa-2"
              ><span class="font-weight-light"> Status: </span>
              <span class="font-weight-regular">{{
                orderDetail ? orderDetail.status : "" 
              }}</span></span
            >
          </p></v-col
        >
        <v-col class="col-12 pb-0"
          ><p class="text-h5">Your Order: {{ getItemLength }} Items</p></v-col
        >
        <v-col
          class="col-12 pb-0"
          v-for="item in orderDetail.items"
          :key="item.id"
        >
          <OrderDetailRow :item="item" />
          <!-- Single Row for Item -->
        </v-col>
        <v-col class="col-12 pb-0">
          <p class="text-h5 pb-0">
            <span>Total:</span>
            <span class="float-right">₹{{ getTotalAmount() }}</span>
          </p>
        </v-col>
        <v-col class="col-12">
          <v-divider></v-divider>
        </v-col>
        <v-col>
          <p class="text-h5">
            <span>Order Details:</span> <span class="float-right"></span>
          </p>
          <p class="font-weight-light mb-0 text-uppercase">Order By</p>
          <p>{{orderDetail.orderedBy}}</p>
          <p class="font-weight-light mb-0 text-uppercase">Order Id</p>
          <p>{{orderDetail.id}}</p>
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
          <p>Loading Order #{{orderId}}</p>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import OrderDetailRow from "@/components/order-detail-row.component.vue";
export default {
  name: "OrderDetail",
  data() {
    return {
      orderId: undefined,
    };
  },
  components: {
    OrderDetailRow,
  },
  beforeMount() {
    // initializing states
    this.initialLoad();
  },
  computed: {
    getItemLength() {
      // calculating number of items
      return this.orderDetail.items.length;
    },
    orderDetail: {
      set(data) {},
      get() {
        return this.$store.getters["getOrderById"](this.orderId);
      }
    }
  },
  methods: {
    initialLoad() {
      // initializing the states
      this.orderId = this.$route.params.id;
      this.orderDetail = this.$store.getters["getOrderById"](this.orderId);
      console.log(this.orderDetail);
    },
    getTotalAmount() {
      // Calculating total item amount
      let total = 0;
      this.orderDetail.items.forEach((element) => {
        total = total + element.quantity * element.rate;
      });
      return total;
    },
  },
};
</script>

<style>
</style>