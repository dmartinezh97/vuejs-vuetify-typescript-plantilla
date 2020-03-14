<template>
  <div>
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click="$vuetify.theme.dark = !$vuetify.theme.dark" />

      <v-toolbar-title>{{this.$store.state.appName}}</v-toolbar-title>
      <v-spacer></v-spacer>
      
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="(item, index) in items" :key="index" :to="{name: item.enlace}">{{ item.titulo }}</v-btn>
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