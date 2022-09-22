<template>
  <v-card max-width="522px">
    <v-card-title>Настройки компании</v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
            v-model="companyName"
            label="Название компании"
            clearable
        />
        <v-text-field
            v-model="maxCountOfStamps"
            label="Максимальное количество штампов"
            type="number"
            :rules="maxCountOfStampsRules"
            clearable
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn style="background-color: #63C7B2; margin-left: 6px" @click="save">Сохранить</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  name: "SettingsCompanyCard",
  data() {
    return {
      maxCountOfStamps: 0,
      companyName: '',
      maxCountOfStampsRules: [
        v => v > 0 || 'Количество штампов должно быть больше 0',
      ],
    }
  },
  methods: {
    save() {
      axios.put('http://localhost:5005/api/Company/edit', {
        'companyId': localStorage.getItem('companyId'),
        'companyName': this.companyName,
        'maxCountOfStamps': this.maxCountOfStamps
      }, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      }).then(_ => {
        this.$swal({
          icon: 'success',
          title: 'Аккаунт компании успешно изменен',
          showConfirmButton: false,
          timer: 1200
        });
      }).catch(_ => {
        this.$swal({
          icon: 'error',
          title: 'Произошла ошибка при изменении данных компании',
          showConfirmButton: false,
          timer: 1500
        })
      })
    }
  }

}
</script>

<style scoped>

</style>