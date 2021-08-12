<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="12">
      <v-card>
        <v-card-title class="headline">
          Indicações
        </v-card-title>
        <v-card-text>
          <v-data-table
            :headers="headers"
            :items="indicacoes"
            sort-by="indicacoes"
            class="elevation-1"
            :loading="loading"
          >
            <template v-slot:item.tipo_id="{ item }">
              {{ getTipo(item.tipo_id) }}
            </template>

            <template v-slot:item.site_id="{ item }">
              {{ getSite(item.site_id) }}
            </template>

            <template v-slot:item.status_id="{ item }">
              {{ getStatus(item.status_id) }}
            </template>

            <template v-slot:item.actions="{ item }">
              <v-icon
                small
                class="mr-2"
                @click="editItem(item)"
              >
                mdi-pencil
              </v-icon>
              <v-icon
                small
                @click="deleteItem(item)"
              >
                mdi-delete
              </v-icon>
            </template>

            <template v-slot:top>
              <v-toolbar
                flat
              >
                <v-divider
                  class="mx-4"
                  inset
                  vertical
                ></v-divider>
                <v-spacer></v-spacer>
                <v-dialog
                  v-model="dialog"
                  max-width="500px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="primary"
                      dark
                      class="mb-2"
                      v-bind="attrs"
                      v-on="on"
                    >
                      Nova indicação
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
                              label="Dessert name"
                            ></v-text-field>
                          </v-col>
                          <v-col
                            cols="12"
                            sm="6"
                            md="4"
                          >
                            <v-text-field
                              v-model="editedItem.calories"
                              label="Calories"
                            ></v-text-field>
                          </v-col>
                          <v-col
                            cols="12"
                            sm="6"
                            md="4"
                          >
                            <v-text-field
                              v-model="editedItem.fat"
                              label="Fat (g)"
                            ></v-text-field>
                          </v-col>
                          <v-col
                            cols="12"
                            sm="6"
                            md="4"
                          >
                            <v-text-field
                              v-model="editedItem.carbs"
                              label="Carbs (g)"
                            ></v-text-field>
                          </v-col>
                          <v-col
                            cols="12"
                            sm="6"
                            md="4"
                          >
                            <v-text-field
                              v-model="editedItem.protein"
                              label="Protein (g)"
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
                        Cancelar
                      </v-btn>
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="save"
                      >
                        Salvar
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="500px">
                  <v-card>
                    <v-card-title class="text-h5">Tem certeza de que deseja excluir este item?</v-card-title>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                      <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-col>
    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      loading: true,
      headers: [
        {text: 'Id', value: 'id'},
        {text: 'Status', value: 'status_id'},
        {text: 'Tipo', value: 'tipo_id'},
        {text: 'Site', value: 'site_id'},
        {text: 'Nome', value: 'nome'},
        {text: 'Email', value: 'email'},
        {text: 'Actions', value: 'actions', sortable: false},
      ],
      indicacoes: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      }
    }),
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nova indicação' : 'Editar indicação'
      },
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },
    created () {
      this.initialize()
    },
    methods: {
      initialize () {
        this.getIndicacoes()
      },
      async getIndicacoes(){
        this.indicacoes = await this.$api.$get('v1/indicacoes')
        this.loading = false
        console.log(this.indicacoes)
      },
      getStatus(item){
        if(item == 1){
          return 'ATIVO'
        } else if (item == 2) {
          return 'INATIVO'
        } else if (item == 3) {
          return 'NOVO'
        } else if (item == 4) {
          return 'NA FILA'
        } else if (item == 5) {
          return 'EM CONTATO'
        } else if (item == 6) {
          return 'NEGOCIAÇÃO'
        } else if (item == 7) {
          return 'AGENDADO'
        } else if (item == 8) {
          return 'DESISTIU'
        } else if (item == 9) {
          return 'REPETIDA'
        } else if (item == 10) {
          return 'DELETADA'
        } else if (item == 11) {
          return 'VENDIDO'
        } else if (item == 12) {
          return 'INVÁLIDAS'
        } else if (item == 19) {
          return 'EM COTAÇÃO'
        } else if (item == 21) {
          return 'FECHADO'
        } else if (item == 28) {
          return 'NÃO QUER'
        } else if (item == 37) {
          return 'PRIORIDADE'
        }
      },
      getTipo(item){
        if (item == 11) {
          return 'INDICAÇÃO'
        } else if (item == 10) {
          return 'MANUAL'
        }
      },
      getSite(item){
        if(item == 2){
          return 'ABSOLUTA QUALICORP ORÇAMETO'
        }
      },
      getProfissao(item){
        this.editedIndex = this.indicacoes.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },
      editItem (item) {
        this.editedIndex = this.indicacoes.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      deleteItemConfirm () {
        this.indicacooes.splice(this.editedIndex, 1)
        this.closeDelete()
      },
      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.indicacooes[this.editedIndex], this.editedItem)
        } else {
          this.indicacooes.push(this.editedItem)
        }
        this.close()
      }
    }
  }
</script>