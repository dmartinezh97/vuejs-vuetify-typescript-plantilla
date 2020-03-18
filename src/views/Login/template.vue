<template>
  <v-content id="login">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6" lg="6">
          <v-card class="elevation-12">
            <v-toolbar color="teal" dark flat>
              <v-toolbar-title>Iniciar sesión</v-toolbar-title>
            </v-toolbar>
            <v-form ref="form" @keyup.enter.native="submit" v-model="valid" lazy-validation>
              <v-card-text>
                <v-alert v-if="errorLogin" dense outlined type="error">Usuario o contraseña incorrecto</v-alert>
                  <v-text-field
                    label="Usuario"
                    v-model="usuario"
                    :rules="rulesUsuario"
                    prepend-icon="mdi-account"
                    type="text"
                    required
                  />
                  <v-text-field
                    label="Contraseña"
                    v-model="password"
                    :rules="rulesPassword"
                    prepend-icon="mdi-lock"
                    required
                    :append-icon="verPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="verPassword ? 'text' : 'password'"
                    @click:append="verPassword = !verPassword"
                  />
              </v-card-text>
            </v-form>
            <v-card-actions>
              <v-spacer />
              <v-btn color="teal" @click="submit" :loading="btnLoading" :disabled="!valid">Login</v-btn>
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