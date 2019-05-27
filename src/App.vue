<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Facebook Friend Analysis</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <particle-container>
      <v-content>
        <v-container>
          <FacebookSignIn v-if="!signedIn" />
          <MainApp v-if="signedIn" />
        </v-container>
      </v-content>
    </particle-container>
  </v-app>
</template>

<script>
import FacebookSignIn from '@/components/FacebookSignIn.vue';
import MainApp from '@/components/MainApp.vue';
import ParticleContainer from '@/components/ParticleContainer.vue';

export default {
  name: 'facebookfriendanalysis',
  components: {
    FacebookSignIn,
    MainApp,
    ParticleContainer
  },
  data() {
    return {
      signedIn: false
    };
  }
};
</script>
