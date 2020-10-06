<template>
  <div>
    <p class="title mb-0 font-weight-light">{{ item.name }}</p>
    <p class="body mb-0"><span>{{ `${ item.quantity } X ₹${ item.rate }` }}</span><span class="float-right">₹{{ item.quantity * item.rate }}</span></p>
  </div>
</template>

<script>
export default {
  name: "OrderDetailRow",
  props: {
    item: {
      type: Object,
      default: undefined,
    },
  },
};
</script>

<style>

</style>