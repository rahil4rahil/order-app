<template>
  <v-container>
    <v-row align="center">
      <v-col class="col-8">
        <img :src="logo" alt="logo" />
      </v-col>
      <v-col class="col-4">
        <v-btn elevation="0" v-show="currentRoute != 'Order'" @click="handleSubmit" class="text-capitalize float-right">View Orders</v-btn>
        <v-btn elevation="0" v-show="currentRoute != 'Home'" @click="handleSubmit" class="text-capitalize float-right">Home</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      logo: require("../assets/logo.svg"),
    };
  },
  computed: {
    currentRoute() {
      return this.$route.name
    }
  },
  methods: {
    handleSubmit(e) {
      console.log(this.$route)
      if (e.target.innerHTML == 'View Orders') {
        this.$router.push({ path: '/order' }) // navigating to order page
      }
      else if (e.target.innerHTML == 'Home') {
        this.$router.push({ path: '/' }) // nagivating to home page
      }
    }
  }
};
</script>

<style>
</style>