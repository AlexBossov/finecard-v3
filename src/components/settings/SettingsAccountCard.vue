<template>
  <v-card max-width="522px">
    <v-card-title>Настройки аккаунта</v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
            v-model="email"
            label="E-mail"
            hint="Например, alex@gmail.com"
            :rules="emailRules"
            required
            clearable
            :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
        />
        <v-text-field
            v-model="phoneNumber"
            label="Номер телефона"
            hint="Например, +79198864428"
            type="number"
            :rules="phoneNumberRules"
            clearable
            :class="{invalid: ($v.phoneNumber.$dirty && !$v.phoneNumber.required)
                                  || ($v.phoneNumber.$dirty && !$v.phoneNumber.minLength)
                                  || ($v.phoneNumber.$dirty && !$v.phoneNumber.maxLength)}"
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn
          style="background-color: #63C7B2; margin-left: 6px"
          @click="save"
      >
        Сохранить
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>


import {email, maxLength, minLength, required} from "vuelidate/lib/validators";

export default {
  name: "SettingsAccountCard",
  data() {
    return {
      email: '',
      phoneNumber: '',
      emailRules: [
        v => /.+@.+\./.test(v) || 'E-mail должен быть настоящий',
      ],
      phoneNumberRules: [
        v => /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(v)
            || 'Номер телефона должен быть настоящий',
      ],
    }
  },
  validations: {
    email: {email, required},
    phoneNumber: {required, minLength: minLength(11), maxLength: maxLength(11)},
  },
  methods: {
    async save() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        this.$swal({
          icon: 'error',
          title: 'Зполните все поля правильно',
          showConfirmButton: false,
          timer: 1500
        })
        return
      }

      this.$swal({
        icon: 'success',
        title: 'Аккаунт успешно изменен',
        showConfirmButton: false,
        timer: 1200
      });
    },
  },
}
</script>

<style scoped>

</style>