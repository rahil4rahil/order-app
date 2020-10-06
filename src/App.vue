<template>
  <v-app>
    <v-app-bar app>
      <Header />
    </v-app-bar>
    <v-main class="main-bg">
      <transition
        name="fade"
        mode="out-in"
      >
       <router-view/>
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/header.component.vue'
export default {
  name: 'App',

  components: {
    Header
  },

  data: () => ({
    //
  }),
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
  }
};
</script>

<style>
.v-main__wrap, .v-toolbar__content {
  max-width: 1200px !important;
  margin: auto;
}
.v-main__wrap {
  margin-top: 20px;
}
.main-bg {
  background-image: url('~@/assets/bg.jpg');
  background-size: cover;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>
