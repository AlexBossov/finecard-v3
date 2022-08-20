<template>
  <div>
    <Navbar>
    </Navbar>
    <div class="body">
      <v-data-table
          :headers="headers"
          :items="customers"
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
import axios from "axios";

export default {
  name: "Customer",
  components: {Navbar},
  data() {
    return {
      search: '',
      surnames: '',
      customers: [],
      headers: [
        {text: 'Номер телефона', value: 'phoneNumber'},
        {text: 'Дата первой покупки', value: 'firstTimePurchase'},
        {text: 'Дата последней покупки', value: 'lastTimePurchase'},
        {text: 'Текущее кол-во штампов', value: 'countOfStamps'},
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
      axios.get('http://localhost:5005/api/Customer/' + localStorage.getItem('companyId'), {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      })
          .then(response => (this.customers = response.data));
      // this.clients = [
      //   {
      //     number: "+7-918-999-14-11",
      //     firstPurchaseDate: "02.01.2022",
      //     lastPurchaseDate: "11.07.2022",
      //     currentStampCount: "0",
      //   },
      //   {
      //     number: "+7-919-546-42-24",
      //     firstPurchaseDate: "04.01.2022",
      //     lastPurchaseDate: "11.07.2022",
      //     currentStampCount: "1",
      //   },
      //   {
      //     number: "+7-919-234-53-12",
      //     firstPurchaseDate: "13.01.2022",
      //     lastPurchaseDate: "11.07.2022",
      //     currentStampCount: "4",
      //   {
      //     number: "+7-919-235-23-00",
      //     firstPurchaseDate: "02.01.2022",
      //     lastPurchaseDate: "11.07.2022",
      //     currentStampCount: "4",
      //   },
      //   {
      //     number: "+7-918-357-00-00",
      //     firstPurchaseDate: "02.01.2022",
      //     lastPurchaseDate: "04.07.2022",
      //     currentStampCount: "2",
      //   },
      // ]
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