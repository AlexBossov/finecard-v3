<template>
  <div>
    <slot>
      <div>
        <LeftNavBar/>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
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
                        v-model="password"
                        :rules="nameRules"
                        :counter="10"
                        label="Пароль"
                        required
                    />
                  </v-form>
                </v-card-text>
                <v-card-text>
                  Don’t have an account?
                  <a>Sign up</a>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="indigo accent-2" to="/locations">Login</v-btn>
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
import LeftNavBar from "@/components/leftNavBar/LeftNavBar";

export default {
  name: "RegisterForm",
  components: {LeftNavBar},
  data() {
    return {
      email: "bosov2012@yandex.ru",
      password: "1234",
      valid: false,
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
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