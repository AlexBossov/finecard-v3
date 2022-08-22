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
          <v-btn class="blue darken-1 white--text" @click="cardIndex=1">Изменение пароля</v-btn>
        </v-col>
        <v-col
            cols="2"
            sm="2"
            md="3"
        >
          <v-btn class="blue darken-1 white--text" @click="cardIndex=2">Настройка карточки</v-btn>
        </v-col>
      </v-row>
      <v-row align-content="center">
        <v-col
            cols="1"
            sm="2"
            md="3"
        >
          <v-btn class="blue darken-1 white--text" @click="cardIndex=3">Настройка аккаунта</v-btn>
        </v-col>
        <v-col
            cols="2"
            sm="2"
            md="3"
        >
          <v-btn class="blue darken-1 white--text" @click="cardIndex=4">Настройка компании</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col
            cols="3"
            sm="6"
            md="12"
        >
          <SettingsPasswordCard v-if="cardIndex === 1"/>
          <SettingsWalletCard v-if="cardIndex === 2"/>
          <SettingsAccountCard v-if="cardIndex === 3"/>
          <SettingsCompanyCard v-if="cardIndex === 4"/>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>
import Navbar from "@/components/navbar/Navbar";
import SettingsPasswordCard from "@/components/settings/SettingsPasswordCard";
import SettingsAccountCard from "@/components/settings/SettingsAccountCard";
import SettingsCompanyCard from "@/components/settings/SettingsCompanyCard";
import SettingsWalletCard from "@/components/settings/SettingsWalletCard";


export default {
  name: "Settings",
  components: {
    Navbar,
    SettingsPasswordCard,
    SettingsAccountCard,
    SettingsCompanyCard,
    SettingsWalletCard
  },
  data() {
    return {
      cardIndex: 1,
    }
  }

}
</script>

<style scoped>

</style>