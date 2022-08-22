<template>
  <v-card max-width="522px">
    <v-card-title>Изменение пароля</v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
            label="Старый пароль"
            clearable
        />
        <v-text-field
            label="Новый пароль"
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
  name: "SettingsPasswordCard"
}
</script>

<style scoped>

</style>