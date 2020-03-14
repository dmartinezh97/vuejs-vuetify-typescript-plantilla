<template>
  <v-app id="app">
    <navbar></navbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer app>
      <span>{{ this.$store.state.appName }} &copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { State } from "vuex-class";
import AuthMixin from "@/mixins/AuthMixin";
import Navbar from "@/components/Navbar/component";

@Component({
  mixins: [AuthMixin],
  components: {
    Navbar
  }
})
export default class App extends Vue {}
</script>

<style>
/* html, body{
  height: 100%;
  background-color: #eaeaea;
}
#app{
  height: 100%;
}
.mt-navbar{
  margin-top: 64px!important;
} */
</style>