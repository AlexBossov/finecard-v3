<template>
  <v-card max-width="522px">
    <v-card-title>Изменение пароля</v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
            v-model="oldPassword"
            :rules="passwordRules"
            :counter="15"
            :append-icon="showOldPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showOldPassword ? 'text' : 'password'"
            @click:append="showOldPassword = !showOldPassword"
            label="Сатрый пароль"
            :class="{invalid: ($v.oldPassword.$dirty && !$v.oldPassword.required)
                                  || ($v.oldPassword.$dirty && !$v.oldPassword.minLength)
                                  || ($v.oldPassword.$dirty && !$v.oldPassword.maxLength)}"
        />
        <v-text-field
            v-model="newPassword"
            :rules="passwordRules"
            :counter="15"
            :append-icon="showNewPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showNewPassword ? 'text' : 'password'"
            @click:append="showNewPassword = !showNewPassword"
            label="Новый пароль"
            :class="{invalid: ($v.newPassword.$dirty && !$v.newPassword.required)
                                  || ($v.newPassword.$dirty && !$v.newPassword.minLength)
                                  || ($v.newPassword.$dirty && !$v.newPassword.maxLength)}"
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn style="background-color: #63C7B2; margin-left: 6px" @click="save">Сохранить</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {maxLength, minLength, required} from "vuelidate/lib/validators";
import axios from "axios";

export default {
  name: "SettingsPasswordCard",
  data() {
    return {
      oldPassword: '',
      newPassword: '',
      showOldPassword: false,
      showNewPassword: false,
      passwordRules: [
        v => v.length >= 6 || 'Пароль должен быть больше 5 символов',
        v => v.length <= 15 || 'Пароль должен быть меньше 16 символов',
      ],
    }
  },
  validations: {
    oldPassword: {required, minLength: minLength(6), maxLength: maxLength(15)},
    newPassword: {required, minLength: minLength(6), maxLength: maxLength(15)},
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

      await axios.post('http://localhost:5005/api/Authenticate/change-password', {
            "companyId": localStorage.getItem('companyId'),
            "oldPassword": this.oldPassword,
            "newPassword": this.newPassword,
          }, {
            headers: {
              "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
          }
      ).then(_ => {
        this.$swal({
          icon: 'success',
          title: 'Пароль успешно изменен',
          showConfirmButton: false,
          timer: 1500
        })
        this.oldPassword = ''
        this.newPassword = ''
      }).catch(_ => {
        this.$swal({
          icon: 'error',
          title: 'Произошла ошибка при изменении пароля',
          showConfirmButton: false,
          timer: 1500
        })
        this.oldPassword = ''
        this.newPassword = ''
      })
    }
  }
}
</script>

<style scoped>

</style>