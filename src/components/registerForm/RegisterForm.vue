<template>
  <div>
    <slot>
      <div>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md7>
              <v-card class="elevation-12">
                <v-toolbar color="indigo accent-2">
                  <v-spacer></v-spacer>
                  <v-toolbar-title>Welcome</v-toolbar-title>
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
                    <v-text-field
                        v-model="number"
                        :rules="numberRules"
                        :counter="11"
                        label="Номер телефона"
                        required
                    />
                    <v-text-field
                        v-model="password"
                        :rules="passwordRules"
                        :counter="10"
                        label="Пароль"
                        required
                    />
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="indigo accent-2" @click="$emit('changeFormType', 'login')">Register</v-btn>
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
  name: "RegisterForm",
  data() {
    return {
      email: '',
      password: '',
      number: '',
      valid: false,
      passwordRules: [
        v => !!v || 'Пароль обязателен',
        v => v.length >= 6 || 'Пароль должен быть больше 6 символов',
      ],
      emailRules: [
        v => !!v || 'E-mail обязателен',
        v => /.+@.+/.test(v) || 'E-mail должен быть вылидный',
      ],
      numberRules: [
        v => !!v || 'Номер телефона обязателен',
        v => v.length === 11 || 'Номер телефона должен состоять из 11 цифр',
        v => /^\d+$/.test(v) || 'Телефон должен содержать только цифры',
      ]
    }
  },
}
</script>

<style scoped>

</style>