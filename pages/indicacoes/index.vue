<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="12">
      <v-card>
        <v-card-title class="headline">
          Indicações
        </v-card-title>
        <v-card-text>
          <v-data-table
            :page="page"
            :pageCount="numberOfPages"
            :headers="headers"
            :items="indicacoes"
            :options.sync="options"
            :server-items-length="totalPassengers"
            :loading="loading"
            class="elevation-1"
          >
          
            <template v-slot:item.status="{ item }">
              <v-chip
                :style="getColor(item.status.cor)"
                dark
              >
                {{ item.status.nome }}
              </v-chip>
            </template>

            <template v-slot:item.tipo="{ item }">
              <v-chip
                color="success"
                dark
              >
                {{ getTipo(item.tipo.nome) }}
              </v-chip>
            </template>

            <template v-slot:item.telefone="{ item }">
              {{ getTelefone(item) }}
            </template>

            <template v-slot:item.celular="{ item }">
              {{ getCelular(item) }}
            </template>

            <template v-slot:item.cpf="{ item }">
              {{ getCpf(item.cpf) }}
            </template>

            <template v-slot:item.cnpj="{ item }">
              {{ getCnpj(item.cnpj) }}
            </template>

            <template v-slot:item.created="{ item }">
              {{ getDate(item.created) }}
            </template>

            <template v-slot:item.acoes="{ item }">
              <v-icon
                small
                class="mr-2"
                @click="editarItem(item)"
              >
                mdi-pencil
              </v-icon>
              <v-icon
                small
                @click="deletarItem(item)"
              >
                mdi-delete
              </v-icon>
            </template>

          </v-data-table>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
const { zonedTimeToUtc, utcToZonedTime, format } = require('date-fns-tz')
  export default {
    data() {
      return {
        page: 0,
        totalPassengers: 0,
        numberOfPages: 0,
        indicacoes: [],
        pageNumber: 1,
        loading: true,
        options: {},
        headers: [
          { text: "Id", value: "id" },
          { text: "Nome", value: "nome" },
          { text: "Status", value: "status" },
          { text: "Tipo", value: "tipo" },
          { text: "Telefone", value: "telefone" },
          { text: "Celular", value: "celular" },
          { text: "Email", value: "email" },
          { text: "Cpf", value: "cpf" },
          { text: "Cnpj", value: "cnpj" },
          { text: "Aniv. Apolice", value: "" },
          { text: "Vigência", value: "" },
          { text: "Atual", value: "" },
          { text: "Cadastro", value: "created" },
          { text: "Retorno", value: "" },
          { text: "Ações", value: "acoes" },
        ],
      };
    },
    watch: {
      options: {
        handler() {
          this.readDataFromAPI();
        },
      },
      deep: true,
    },
    methods: {
      async readDataFromAPI() {
        this.loading = true;
        const { page, itemsPerPage } = this.options;
        let pageNumber = page - 1;
        await this.$api.$get(
            "v1/indicacoes?size=" +
              itemsPerPage +
              "&page=" +
              pageNumber
          )
          .then((response) => {
            this.loading = false;
            this.indicacoes = response.items;
            this.totalPassengers = response.meta.totalItems;
            this.numberOfPages = response.meta.totalPages;
            this.pageNumber = response.meta.currentPage+1;
          });
      },
      getColor (cor) {
        return "background:" + cor 
      },
      getTipo (tipo) {
        return tipo.substr(0, 1).toUpperCase()
      },
      getTelefone(telefone){
        if(telefone.telefone){
          var length = telefone.telefone.length;
          var telefoneFormatado;

          if (length === 8) {
          telefoneFormatado = '(' + telefone.ddd_telefone + ') ' + telefone.telefone.substring(0, 4) + '-' + telefone.telefone.substring(4, 8);
          } else if (length === 9) {
          telefoneFormatado = '(' + telefone.ddd_telefone + ') ' + telefone.telefone.substring(0, 5) + '-' + telefone.telefone.substring(5, 9);
          }
          return telefoneFormatado;
        }
      },
      getCelular(celular){
        if(celular.celular){
          var length = celular.celular.length;
          var telefoneFormatado;

          if (length === 8) {
          telefoneFormatado = '(' + celular.ddd_celular + ') ' + celular.celular.substring(0, 4) + '-' + celular.celular.substring(4, 8);
          } else if (length === 9) {
          telefoneFormatado = '(' + celular.ddd_celular + ') ' + celular.celular.substring(0, 5) + '-' + celular.celular.substring(5, 9);
          }
          return telefoneFormatado;
        }
      },
      getCpf(cpf){
        cpf = cpf.replace(/[^\d]/g, "");
          return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
      },
      getCnpj(cnpj){
        return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
      },
      getDate(date){
        const a = new Date(date)
        const zonedDate = utcToZonedTime(a)
        const pattern = 'd/M/yyyy HH:mm'
        return format(zonedDate, pattern)
      },
      editarItem(item){

      },
      deletarItem(item){

      }
    },
    mounted() {
      this.readDataFromAPI();
    },
  }
</script>
<style lang="scss">
  table {
    tbody {
      tr {
        td {
          font-size: 12px !important;
        }
      }
    }
  }
</style>