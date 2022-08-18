<template>
  <div>
    <slot>
      <div>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md7>
              <v-card class="elevation-12">
                <v-toolbar color="blue darken-1">
                  <v-spacer></v-spacer>
                  <v-toolbar-title class="white--text">Восстановление пароля</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <v-form v-model="valid">
                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                    />
                  </v-form>
                </v-card-text>
                <v-card-text>Введите ваш email и мы отправим вам новый пароль</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn class="white--text blue darken-1" @click="$emit('changeFormType', 'login')">Отправить</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </slot>
  </div>

</template>

<script>

export default {
  name: "RecoveryForm",
  data() {
    return {
      email: "bosov2012@yandex.ru",
      password: "1234",
      valid: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ]
    }
  },
}
</script>

<style scoped>

</style>