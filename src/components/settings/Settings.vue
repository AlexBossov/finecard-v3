<template>
  <div>
    <Navbar/>
    <v-container>
      <v-row>
        <v-col
            cols="1"
            sm="12"
            md="12"
        >
          <h1>Настройки</h1>
        </v-col>
      </v-row>
      <v-row align-content="center">
        <v-col
            cols="2"
            sm="2"
            md="3"
        >
          <v-btn class="blue darken-1 white--text">Изменение пароля</v-btn>
        </v-col>
        <v-col
            cols="2"
            sm="2"
            md="3"
        >
          <v-btn class="blue darken-1 white--text">Настройка карточки</v-btn>
        </v-col>
      </v-row>
      <v-row align-content="center">
        <v-col
            cols="1"
            sm="2"
            md="3"
        >
          <v-btn class="blue darken-1 white--text">Настройка аккаунта</v-btn>
        </v-col>
        <v-col
            cols="2"
            sm="2"
            md="3"
        >
          <v-btn class="blue darken-1 white--text">Настройка компании</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col
            cols="3"
            sm="6"
            md="12"
        >
          <v-card max-width="522px" v-if="cardIndex === 1">
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
          <v-card max-width="522px" v-if="cardIndex === 2">
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
          <v-card max-width="522px" v-if="cardIndex === 3">
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
          <v-card max-width="522px" v-if="cardIndex === 4">
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
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>
import Navbar from "@/components/navbar/Navbar";

export default {
  name: "Settings",
  components: {Navbar},
  data() {
    return {
      cardIndex: 3,
    }
  }

}
</script>

<style scoped>

</style>