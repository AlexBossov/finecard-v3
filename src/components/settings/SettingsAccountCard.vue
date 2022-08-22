<template>
  <v-card max-width="522px">
    <v-card-title>Настройки аккаунта</v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
            label="Почта"
            clearable
        />
        <v-text-field
            label="Номер телефона"
            clearable
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn style="background-color: #63C7B2; margin-left: 6px">Сохранить</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "SettingsAccountCard"
}
</script>

<style scoped>

</style>