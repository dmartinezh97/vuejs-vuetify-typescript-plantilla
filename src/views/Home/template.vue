<template>
  <v-content id="login">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6" lg="6">
          <v-alert class="text-center" color="teal" border="top" colored-border type="info" elevation="12">
            Comprueba si tienes una cuenta que ha sido comprometida
          </v-alert>
          <v-card class="elevation-12 mb-2">
            <v-form ref="form" @keyup.enter.native="submit" v-model="valid" lazy-validation>
              <v-card-text>
                <v-text-field
                  label="Buscar termino"
                  v-model="termino"
                  :rules="rulesTermino"
                  prepend-icon="mdi-magnify"
                  type="text"
                  :counter="50"
                  required
                />
                <v-select
                  label="Tipo"
                  v-model="tipo"
                  :items="tipos"
                  item-text="nombre"
                  item-value="valor"
                  :rules="rulesTipo"
                  prepend-icon="mdi-format-list-bulleted-type"
                  required
                ></v-select>
              </v-card-text>
            </v-form>
            <v-card-actions>
              <v-spacer />
              <v-btn color="teal" @click="submit" :loading="btnLoading" :disabled="!valid" block>Buscar</v-btn>
            </v-card-actions>
          </v-card>
          <PanelLeaks :fugas="fugas"></PanelLeaks>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<style>
#login{
  height: 100%;
}
</style>