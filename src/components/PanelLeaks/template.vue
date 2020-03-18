<template>
  <div>
    <v-card class="mx-auto" outlined>
      <v-list-item three-line>
        <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
        <v-list-item-content>
          <div class="overline mb-4">OVERLINE</div>
          <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
          <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-card-actions>
        <v-btn text>Button</v-btn>
        <v-btn text>Button</v-btn>
      </v-card-actions>
    </v-card>
  </div>
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