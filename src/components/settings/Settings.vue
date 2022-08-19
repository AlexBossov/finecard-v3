<template>
  <div>
    <Navbar/>
    <v-container>
      <v-card-title>Настройки</v-card-title>
      <v-row align-content="center">
        <v-col
            cols="1"
            sm="2"
            md="3"
        >
          <v-btn class="blue darken-1 white--text"
          >
            Настройка аккаунта
          </v-btn>
        </v-col>
        <v-col
            cols="2"
            sm="2"
            md="3"
        >
          <v-btn class="blue darken-1 white--text"
          >
            Изменение пароля
          </v-btn>
        </v-col>
      </v-row>

      <v-row align-content="center">
        <v-col
            cols="2"
            sm="2"
            md="3"
        >
          <v-btn class="blue darken-1 white--text"
          >
            Настройка компании
          </v-btn>
        </v-col>
        <v-col
            cols="2"
            sm="2"
            md="3"
        >
          <v-btn class="blue darken-1 white--text"
          >
            Настройка карточки
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col
            cols="3"
            sm="6"
            md="12"
        >
          <v-card
              max-width="500px"
          >
            <v-card-title>Настройки аккаунта</v-card-title>
            <v-text-field
                style="padding-left: 14px; padding-right: 14px"
                solo
                placeholder="Почта"

            />
            <v-text-field
                style="padding-left: 14px; padding-right: 14px"
                solo
                placeholder="Номер телефона"
            />

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
  components: {Navbar}

}
</script>

<style scoped>

</style>