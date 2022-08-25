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
                  <v-toolbar-title class="white--text">Welcome</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                        clearable
                        :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
                    />
                    <v-text-field
                        v-model="password"
                        :rules="passwordRules"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPassword ? 'text' : 'password'"
                        @click:append="showPassword = !showPassword"
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
                  Есть аккаунт?
                  <a @click="$emit('changeFormType', 'login')">Войти</a>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                      class="white--text blue darken-1"
                      @click="register"
                  >
                    Регистрация
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
import axios from "axios";
import {email, required, minLength, maxLength} from 'vuelidate/lib/validators'


export default {
  name: "RegisterForm",
  data() {
    return {
      email: '',
      password: '',
      number: '',
      showPassword: false,
      passwordRules: [
        v => !!v || 'Пароль обязателен',
        v => v.length >= 6 || 'Пароль должен быть больше 5 символов',
        v => v.length <= 15 || 'Пароль должен быть меньше 16 символов',
      ],
      emailRules: [
        v => !!v || 'E-mail обязателен',
        v => /.+@.+\./.test(v) || 'E-mail должен быть настоящий',
      ],
    }
  },
  validations: {
    email: {email, required},
    password: {required, minLength: minLength(6), maxLength: maxLength(15)},
  },
  methods: {
    register() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      axios.post('http://localhost:5005/api/Authenticate/register', {
        email: this.email,
        password: this.password
      });
      this.$emit('changeFormType', 'login');
    }
  }
}
</script>

<style scoped>

</style>