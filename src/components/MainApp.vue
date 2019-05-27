<template>
  <v-layout
    text-xs-center
    wrap
  >
    <v-flex xs12>
      <v-img
        :src="require('../assets/logo.svg')"
        class="my-3"
        contain
        height="200"
      ></v-img>
    </v-flex>

    <v-flex mb-4>
      <h1 class="display-2 font-weight-bold mb-3">
        Welcome to Facebook Friend Analysis
      </h1>
      <p class="subheading font-weight-regular">
        <a href="http://facebook.com" target="_blank">Sign In to Facebook</a>
      </p>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
