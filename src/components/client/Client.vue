<template>
  <div>
    <Navbar>
    </Navbar>
    <div class="body">
      <v-data-table
          :headers="headers"
          :items="clients"
          :search="search"
          sort-by="clients"
          class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar
              flat
          >
            <v-toolbar-title>Клиенты</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
            <v-spacer></v-spacer>
          </v-toolbar>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/navbar/Navbar";

export default {
  name: "Client",
  components: {Navbar},
  data() {
    return {
      search: '',
      surnames: '',
      clients: [],
      headers: [
        {text: 'Номер телефона', value: 'number'},
        {text: 'Дата первой покупки', value: 'firstPurchaseDate'},
        {text: 'Дата последней покупки', value: 'lastPurchaseDate'},
        {text: 'Текущее кол-во штампов', value: 'currentStampCount'},
      ],
      emailRules: [
        v => !!v || 'E-mail обязателен',
        v => /.+@.+/.test(v) || 'E-mail должен быть настоящий',
      ],
      requiredRules: [
        v => !!v || 'Поле обязательно'
      ],
      editedIndex: -1,
      editedItem: {
        name: "",
        surname: "",
        email: "",
        location: "",
        post: "",
      },
      defaultItem: {
        name: "",
        surname: "",
        email: "",
        location: "",
        post: "",
      },
    }
  },

  created() {
    this.initialize()
  },

  methods: {
    initialize() {
          this.clients = [
            {
              number: "+7-918-999-14-11",
              firstPurchaseDate: "02.01.2022",
              lastPurchaseDate: "11.07.2022",
              currentStampCount: "0",
            },
            {
              number: "+7-919-546-42-24",
              firstPurchaseDate: "04.01.2022",
              lastPurchaseDate: "11.07.2022",
              currentStampCount: "1",
            },
            {
              number: "+7-919-234-53-12",
              firstPurchaseDate: "13.01.2022",
              lastPurchaseDate: "11.07.2022",
              currentStampCount: "4",
            },
            {
              number: "+7-918-456-86-16",
              firstPurchaseDate: "13.01.2022",
              lastPurchaseDate: "11.07.2022",
              currentStampCount: "2",
            },
            {
              number: "+7-919-345-63-78",
              firstPurchaseDate: "02.01.2022",
              lastPurchaseDate: "11.07.2022",
              currentStampCount: "3",
            },
            {
              number: "+7-918-677-35-32",
              firstPurchaseDate: "02.01.2022",
              lastPurchaseDate: "13.07.2022",
              currentStampCount: "1",
            },
            {
              number: "+7-919-235-23-00",
              firstPurchaseDate: "02.01.2022",
              lastPurchaseDate: "11.07.2022",
              currentStampCount: "4",
            },
            {
              number: "+7-918-357-00-00",
              firstPurchaseDate: "02.01.2022",
              lastPurchaseDate: "04.07.2022",
              currentStampCount: "2",
            },
          ]
    },
  },
}
</script>

<style scoped>
.body {
  padding-left: 68px;
  padding-top: 20px;
  padding-right: 68px;
}
</style>