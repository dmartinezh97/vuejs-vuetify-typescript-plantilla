<template>
  <v-content id="login">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6" lg="6">
          <v-alert class="text-center" color="teal" border="top" colored-border type="info" elevation="2">
            Comprueba si tienes una cuenta que ha sido comprometida
          </v-alert>
          <v-card class="elevation-12">
            <v-form ref="form" v-model="valid" lazy-validation>
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
                  :items="tipos"
                  item-text="nombre"
                  item-value="valor"
                  :rules="rulesTipo"
                  prepend-icon="mdi-format-list-bulleted-type"
                  label="Tipo"
                  required
                ></v-select>
              </v-card-text>
            </v-form>
            <v-card-actions>
              <v-spacer />
              <v-btn color="teal" @click="submit" :loading="btnLoading" :disabled="!valid" block>Buscar</v-btn>
            </v-card-actions>
          </v-card>
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