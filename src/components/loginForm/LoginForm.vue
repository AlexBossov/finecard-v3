<template xmlns="http://www.w3.org/1999/html">
  <div>
    <slot>
      <div>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md7>
              <v-card class="elevation-12">
                <v-toolbar color="blue darken-1">
                  <v-spacer></v-spacer>
                  <v-toolbar-title class="white--text">
                    Welcome
                  </v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <v-form v-model="valid">
                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                        :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
                    />
                    <v-text-field
                        v-model="password"
                        :rules="passwordRules"
                        :counter="15"
                        label="Пароль"
                        required
                        :class="{invalid: ($v.password.$dirty && !$v.password.required)
                                  || ($v.password.$dirty && !$v.password.minLength)
                                  || ($v.password.$dirty && !$v.password.maxLength)}"
                    />
                  </v-form>
                </v-card-text>
                <v-card-text>
                  Нет аккаунта?
                  <a @click="$emit('changeFormType', 'register')">Зарегистрироваться</a>
                  <v-spacer></v-spacer>
                  Забыли
                  <a @click="$emit('changeFormType', 'recovery')"> пароль</a>?
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn class="white--text blue darken-1" @click="login">Войти</v-btn>
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
import axios from 'axios';
import {email, required, minLength, maxLength} from 'vuelidate/lib/validators'


export default {
  name: "LoginForm",
  data() {
    return {
      email: '',
      password: '',
      lol: null,
      valid: false,
      passwordRules: [
        v => !!v || 'Пароль обязателен',
        v => v.length >= 6 || 'Пароль должен быть больше 6 символов',
      ],
      emailRules: [
        v => !!v || 'E-mail обязателен',
        v => /.+@.+/.test(v) || 'E-mail должен быть вылидный',
      ],
    }
  },
  validations: {
    email: {email, required},
    password: {required, minLength: minLength(6), maxLength: maxLength(15)},
  },
  methods: {
    async login() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      await axios.post('http://localhost:5005/api/Authenticate/login', {
        email: this.email,
        password: this.password
      }).then(response => {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('companyId', response.data.companyId)
        this.$router.push('/employees')
      })
    }
  }
}
</script>

<style scoped>

</style>