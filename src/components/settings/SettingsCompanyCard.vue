<template>
  <v-card max-width="522px">
    <v-card-title>Настройки компании</v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
            label="Название компании"
            clearable
        />
        <v-text-field
            label="Количество штампов"
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
  name: "SettingsCompanyCard"
}
</script>

<style scoped>

</style>