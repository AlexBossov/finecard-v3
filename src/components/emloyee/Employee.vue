<template>
  <div>
    <Navbar>
    </Navbar>
    <div class="body">
      <v-data-table
          :headers="headers"
          :items="employees"
          :search="search"
          sort-by="employees"
          class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar
              flat
          >
            <v-toolbar-title>Сотрудники</v-toolbar-title>
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
                  Добавить сотрудника
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
                            label="Имя"
                            :rules="requiredRules"
                            clearable
                            required
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"
                          sm="6"
                          md="4"
                      >
                        <v-text-field
                            v-model="editedItem.surname"
                            label="Фамилия"
                            :rules="requiredRules"
                            clearable
                            required
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"
                          sm="6"
                          md="4"
                      >
                        <v-text-field
                            v-model="editedItem.email"
                            label="Почта"
                            :rules="emailRules"
                            clearable
                            required
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"
                          sm="6"
                          md="4"
                      >
                        <v-text-field
                            v-model="editedItem.locationName"
                            label="Локация"
                            :rules="requiredRules"
                            clearable
                            required
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"
                          sm="6"
                          md="4"
                      >
                        <v-text-field
                            v-model="editedItem.position"
                            label="Должность"
                            :rules="requiredRules"
                            clearable
                            required
                        ></v-text-field>
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
                <v-card-title class="text-h5">Вы точно хотите удалить сотрудника?</v-card-title>
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

export default {
  name: "Employee",
  components: {Navbar},
  data() {
    return {
      search: '',
      surnames: '',
      dialog: false,
      dialogDelete: false,
      employees: [],
      headers: [
        {
          text: 'Имя',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        {text: 'Фамилия', value: 'surname'},
        {text: 'Почта', value: 'email'},
        {text: 'Локация', value: 'location.name'},
        {text: 'Должность', value: 'position'},
        {text: '', value: 'actions', sortable: false},
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
        locationName: "",
        position: "",
      },
      defaultItem: {
        name: "",
        surname: "",
        email: "",
        locationName: "",
        position: "",
      },
    }
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Добавить нового сотрудника' : 'Редактировать сотрудника'
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
      axios.get('http://localhost:5005/api/Employee/' + localStorage.getItem('companyId'), {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      }).then(response => (this.employees = response.data));
    },

    editItem(item) {
      this.editedIndex = this.employees.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.employees.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm() {
      this.employees.splice(this.editedIndex, 1)
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
      if (this.editedIndex > -1) {
        Object.assign(this.employees[this.editedIndex], this.editedItem)
      } else {
        const employee = {
          name: this.editedItem.name,
          surname: this.editedItem.surname,
          email: this.editedItem.email,
          position: this.editedItem.position,
          companyId: localStorage.getItem('companyId')
        }

        axios.get('http://localhost:5005/api/Locations/'
            + localStorage.getItem('companyId')
            + '/getByName/'
            + this.editedItem.locationName, {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
          }
        }).then(response => {
          axios.post('http://localhost:5005/api/Employee', {
            "name": employee.name,
            "surname": employee.surname,
            "companyId": employee.companyId,
            "email": employee.email,
            "position": employee.position,
            "locationId":  response.data.id,
          }, {
            headers: {
              "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
          }).catch(er => console.log(er))
        });
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