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
        />
        <v-text-field
            v-model="phoneNumber"
            label="Номер телефона"
            hint="Например, +79198864428"
            type="number"
            :rules="phoneNumberRules"
            clearable
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn
          style="background-color: #63C7B2; margin-left: 6px"
          @click="showAlert"
      >
        Сохранить
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>


export default {
  name: "SettingsAccountCard",
  data() {
    return {
      email: '',
      phoneNumber: '',
      emailRules: [
        v => /.+@.+/.test(v) || 'E-mail должен быть вылидный',
      ],
      phoneNumberRules: [
        // v => /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}/.text(v) || 'Номер телефона должен быть настоящим', ???????
      ],
    }
  },
  methods: {
    showAlert() {
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