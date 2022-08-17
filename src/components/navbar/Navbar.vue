<template>
  <nav>
    <v-toolbar flat app>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="grey--text"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span class="font-weight-light">Fine</span>
        <span>card</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" style="background-color: #1E90FF">
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-icon class="white--text">{{ link.icon }}</v-icon>
          <v-list-item class="white--text">{{ link.text }}</v-list-item>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import {mdiAccount, mdiAccountCircle, mdiCalendarMonth, mdiHomeGroup, mdiTuneVariant} from "@mdi/js";

export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
      links: [
        {icon: mdiCalendarMonth, text: 'Статистика', route: '/statistics'},
        {icon: mdiAccountCircle, text: 'Клиенты', route: '/clients'},
        {icon: mdiHomeGroup, text: 'Локации', route: '/locations'},
        {icon: mdiAccount, text: 'Сотрудники', route: '/employees'},
        {icon: mdiTuneVariant, text: 'Настройки', route: '/settings'},
      ],
    }
  },
}
</script>

<style scoped>

</style>