<template>
  <v-card height="100%" width="100%" class="mx-auto">
    <v-container>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-container>
  </v-card>
</template>

<script>
// @ is an alias to /src
import OrderList from "@/components/order-list.component.vue";
export default {
  name: "Home",
  components: {
    OrderList,
  },
  created() {
    // Fetchting the Order Data
    this.$store.dispatch("getOrderedData", {});
  },
  data() {
    return {};
  },
};
</script>

<style >
.card-text-wrapper {
  background-color: rgba(255, 255, 255, 0.8) !important;
}
</style>