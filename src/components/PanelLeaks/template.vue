<template>
  <v-data-table
    :headers="headers"
    :items="fugas"
    class="elevation-1"
    no-data-text="No hay resultados"
    hide-default-footer
  ></v-data-table>
  <!-- <v-row>
    <v-col v-for="(n,i) in 5" :key="i" sm="12" md="6">
      <v-card class="mx-auto" outlined>
        <v-list-item>
          <v-avatar color="white" size="36" class="mr-3">
            <img src="https://monitor.cdn.mozilla.net/img/logos/000webhost.png" alt="000webhost">
          </v-avatar>
          <v-list-item-content>
            <v-list-item-title class="vue-title">000webhost</v-list-item-title>
            <v-list-item-subtitle class="vue-key">Filtración añadida</v-list-item-subtitle>
            <v-list-item-subtitle class="vue-value">9 de marzo de 2019</v-list-item-subtitle>
            <v-list-item-subtitle class="vue-key">Filtración añadida</v-list-item-subtitle>
            <v-list-item-subtitle class="vue-value">9 de marzo de 2019</v-list-item-subtitle>
            <v-list-item-subtitle class="vue-key">Filtración añadida</v-list-item-subtitle>
            <v-list-item-subtitle class="vue-value">9 de marzo de 2019</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-col>
  </v-row> -->
  <!-- <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Fuente</th>
          <th class="text-left">Usuario</th>
          <th class="text-left">Correo eléctronico</th>
          <th class="text-left">Teléfono</th>
          <th class="text-left">Contraseña</th>
          <th class="text-left">Hash</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(fuga, index) in fugas" :key="index">
          <td>{{ fuga.fuente }}</td>
          <td>{{ fuga.usuario }}</td>
          <td>{{ fuga.email }}</td>
          <td>{{ fuga.numtelf }}</td>
          <td>{{ fuga.password }}</td>
          <td>{{ fuga.password_hash }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>-->
  <!-- <v-expansion-panels accordion>
    <v-expansion-panel v-for="(fuga, index) in fugas" :key="index">
      <v-expansion-panel-header>{{fuga.fuente}}</v-expansion-panel-header>
      <v-expansion-panel-content>
        
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>-->
</template>

<style>
.vue-title{
  display: block;
  padding-top: 2px;
  font-weight: 600;
}
.vue-key{
  display: block;
  font-size: 12px;
  margin-top: 8px;
  color: #5b5b5b;
}
.vue-value{
  display: block;
  font-size: 14px;
  color: white!important;
  font-weight: 500;
}
</style>