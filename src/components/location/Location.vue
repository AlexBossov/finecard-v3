<template>
  <div>
    <Navbar></Navbar>
    <div class="body">
      <v-data-table
          :headers="headers"
          :items="locations"
          :search="search"
          sort-by="employees"
          class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar
              flat
          >
            <v-toolbar-title>Локации</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-dialog
                v-model="dialog"
                max-width="600px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                >
                  Добавить локацию
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                          cols="12"
                          sm="6"
                          md="4"
                      >
                        <v-text-field
                            v-model="editedItem.name"
                            label="Название"
                            :rules="requiredRules"
                            clearable
                            required
                            :class="{invalid: ($v.editedItem.name.$dirty && !$v.editedItem.name.required)}"
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"
                          sm="6"
                          md="4"
                      >
                        <v-text-field
                            v-model="editedItem.address"
                            label="Адрес"
                            :rules="requiredRules"
                            clearable
                            required
                            :class="{invalid: ($v.editedItem.address.$dirty && !$v.editedItem.address.required)}"
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"
                          sm="6"
                          md="4"
                      >
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                      color="blue darken-1"
                      text
                      @click="close"
                  >
                    Отмена
                  </v-btn>
                  <v-btn
                      color="blue darken-1"
                      text
                      @click="save"
                  >
                    Сохранить
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="text-h5">Вы точно хотите удалить локацию?</v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete">Отмена</v-btn>
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm">Да</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon
              class="mr-2"
              @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
              @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn
              color="primary"
              @click="initialize"
          >
            Reset
          </v-btn>
        </template>
      </v-data-table>
    </div>
  </div>
</template>


<script>
import Navbar from "@/components/navbar/Navbar";
import axios from "axios";
import moment from "moment";
import {required} from "vuelidate/lib/validators";


export default {
  name: "Location",
  components: {Navbar},
  data() {
    return {
      search: '',
      surnames: '',
      dialog: false,
      dialogDelete: false,
      locations: [],
      headers: [
        {text: 'Название', value: 'name'},
        {text: 'Адрес', value: 'address'},
        {text: 'Оплачено до', value: 'payUpDate'},
        {text: '', value: 'actions', sortable: false},

      ],
      emailRules: [
        v => !!v || 'E-mail обязателен',
        v => /.+@.+\./.test(v) || 'E-mail должен быть настоящий',
      ],
      requiredRules: [
        v => !!v || 'Поле обязательно'
      ],
      editedIndex: -1,
      editedItem: {
        name: "",
        address: "",
        payUpDate: "",
      },
      defaultItem: {
        name: "",
        address: "",
        payUpDate: "",
      },
    }
  },

  validations: {
    editedItem: {
      name: {
        required
      },
      address: {
        required
      }
    }
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Добавить новую локацию' : 'Редактировать локацию'
    },
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },

  created() {
    this.initialize()
  },

  methods: {
    initialize() {
      axios.get('http://localhost:5005/api/Locations/' + localStorage.getItem('companyId'), {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      }).then(response => {
        this.locations = response.data
        this.locations.map(location => {
          location.payUpDate = moment(location.payUpDate).utc().format('DD.MM.YYYY')
          if (location.payUpDate === '31.12.0000')
            location.payUpDate = 'Не оплачено'
        })
      });
    },

    editItem(item) {
      this.editedIndex = this.locations.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.locations.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm() {
      axios.delete('http://localhost:5005/api/Locations/' + this.locations[this.editedIndex].id, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      }).then(this.initialize, this.$swal({
        icon: 'success',
        title: 'Локация успешно удалена',
        showConfirmButton: false,
        timer: 1500
      }))
      this.closeDelete()
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        this.$swal({
          icon: 'error',
          title: 'Зполните все поля правильно',
          showConfirmButton: false,
          timer: 1500
        })
        return
      }
      if (this.editedIndex > -1) {
        Object.assign(this.locations[this.editedIndex], this.editedItem)
      } else {
        axios.post('http://localhost:5005/api/Locations/', {
          name: this.editedItem.name,
          address: this.editedItem.address,
          companyId: localStorage.getItem('companyId'),
        }, {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
          }
        }).then(this.initialize, this.$swal({
          icon: 'success',
          title: 'Локация успешно добавлена',
          showConfirmButton: false,
          timer: 1500
        }))
      }
      this.close()
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