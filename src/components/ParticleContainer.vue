<template>
  <div id="particle-container">
    <div id="content-container" ref="contentContainer">
      <slot />
    </div>
    <div id="particles-bg" ref="particlesBackground" />
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import particlesJS from 'particles.js';

export default {
  data() {
    return {};
  },
  mounted() {
    // const { contentContainer, particlesBackground } = this.$refs;

    window.particlesJS.load('particles-bg', '/assets/particles.json');
    // contentContainer.addEventListener('mousemove', (e) => {
    //   console.log(e, particlesBackground);
    // });
  }
};
</script>

<style scoped>
#content-container {
  position: relative;
  z-index: 1;
}

#particles-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

#particles-bg canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
