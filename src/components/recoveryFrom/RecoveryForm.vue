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
                        clearable
                        :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
                    />
                  </v-form>
                </v-card-text>
                <v-card-text>Введите ваш email и мы отправим вам новый пароль</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn class="white--text blue darken-1"
                         @click="recovery"
                  >
                    Отправить
                  </v-btn>
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
import {email, required} from 'vuelidate/lib/validators'


export default {
  name: "RecoveryForm",
  data() {
    return {
      email: "bosov2012@yandex.ru",
      valid: false,
      emailRules: [
        v => !!v || 'E-mail обязателен',
        v => /.+@.+\./.test(v) || 'E-mail должен быть настоящий',
      ],
    }
  },
  validations: {
    email: {email, required},
  },
  methods: {
    recovery() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      this.$emit('changeFormType', 'login')
    }
  }
}
</script>

<style scoped>

</style>