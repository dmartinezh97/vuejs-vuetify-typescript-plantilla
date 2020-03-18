<template>
  <div>
    <v-app-bar app clipped-left>
      <!-- <v-app-bar-nav-icon @click="$vuetify.theme.dark = !$vuetify.theme.dark" /> -->

      <v-toolbar-items>
        <v-btn :to="{name: 'Inicio'}" elevation="0">{{this.$store.state.appName}}</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      
      <v-toolbar-items class="hidden-sm-and-down">
        <!-- <v-btn :to="{name: 'Inicio'}">Inicio</v-btn> -->
        <v-btn :to="{name: 'Login'}" v-if="!isLogged" elevation="0">Iniciar sesión</v-btn>
        <v-btn v-else @click="logout()" >Cerrar sesión</v-btn>
      </v-toolbar-items>
    </v-app-bar>

  </div>
</template>

<style>
.v-list-item__title a {
  text-decoration: none;
  color: white !important;
}
.v-list-item__title .router-link-exact-active {
  font-weight: bold;
  color: #2dc16d !important;
}
/* .v-application a{
  color: white!important;
  text-decoration: none;
} */
</style>