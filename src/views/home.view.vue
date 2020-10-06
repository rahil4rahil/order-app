<template>
 <v-container>
    <v-row align="center">
      <v-col class="col-12">
        <v-card class="card-text-wrapper pa-5">
            <p class="text-h2 text-black">Welcome Guest!</p>
            <p class="text-h4"><a @click="moveToListPage">Click here</a> to review your orders</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  methods: {
    moveToListPage() {
      // Navigating to Order Page
      this.$router.push({path: '/order'})
    }
  },

}
</script>

<style >
.card-text-wrapper {
  background-color: rgba(255, 255, 255, .8) !important;
}
</style>