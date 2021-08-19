<template>
    <v-row justify="center" align="center">
        <v-col cols="12" sm="12" md="12">
            <v-card>
                <v-card-title class="headline">
                Indicação #{{indicacao.id}} 
                <v-btn
                    x-small
                    color="success"
                    @click="voltar">
                    <v-icon left>
                        mdi-pencil
                    </v-icon>
                    Voltar
                </v-btn>
                </v-card-title>
                <v-card-text>
                    <v-form v-model="valid">
                        <v-container>
                            <v-row>
                                <v-col
                                    cols="12"
                                    md="4"
                                    >
                                    <v-text-field
                                        v-model="indicacao.origem.nome"
                                        label="Origem"
                                        required
                                        autocomplete="nope"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="4"
                                    >
                                    <v-text-field
                                        v-model="indicacao.tipo.nome"
                                        label="Tipo"
                                        required
                                        autocomplete="nope"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="4"
                                    >
                                    <v-text-field
                                        v-model="indicacao.acomodacao"
                                        label="Acomodação"
                                        required
                                        autocomplete="nope"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col
                                    cols="12"
                                    md="4"
                                    >
                                    <v-text-field
                                        v-model="indicacao.nome"
                                        label="Nome"
                                        required
                                        autocomplete="nope"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="4"
                                    >
                                    <v-text-field
                                        label="Profissão"
                                        required
                                        autocomplete="nope"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="4"
                                    >
                                    <v-text-field
                                        v-model="indicacao.email"
                                        label="Email"
                                        required
                                        autocomplete="nope"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="4"
                                    v-if="indicacao.email2"
                                    >
                                    <v-text-field
                                        v-model="indicacao.email2"
                                        label="Email 2"
                                        autocomplete="nope"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="4"
                                    v-if="indicacao.email3"
                                    >
                                    <v-text-field
                                        v-model="indicacao.email3"
                                        label="Email 3"
                                        autocomplete="nope"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="4"
                                    v-if="indicacao.email4"
                                    >
                                    <v-text-field
                                        v-model="indicacao.email4"
                                        label="Email 4"
                                        autocomplete="nope"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="4"
                                    v-if="indicacao.email5"
                                    >
                                    <v-text-field
                                        v-model="indicacao.email5"
                                        label="Email 5"
                                        autocomplete="nope"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="4"
                                    v-if="indicacao.email6"
                                    >
                                    <v-text-field
                                        v-model="indicacao.email6"
                                        label="Email 6"
                                        autocomplete="nope"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="4"
                                    v-if="indicacao.email7"
                                    >
                                    <v-text-field
                                        v-model="indicacao.email7"
                                        label="Email 7"
                                        autocomplete="nope"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="4"
                                    v-if="indicacao.email8"
                                    >
                                    <v-text-field
                                        v-model="indicacao.email8"
                                        label="Email 8"
                                        autocomplete="nope"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col
                                    cols="12"
                                    md="4"
                                    >
                                    <v-text-field
                                        v-model="indicacao.telefone"
                                        label="Telefone"
                                        required
                                        autocomplete="nope"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="4"
                                    v-if="indicacao.telefone2"
                                    >
                                    <v-text-field
                                        v-model="indicacao.telefone2"
                                        label="Telefone 2"
                                        autocomplete="nope"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="4"
                                    v-if="indicacao.telefone3"
                                    >
                                    <v-text-field
                                        v-model="indicacao.telefone3"
                                        label="Telefone 3"
                                        autocomplete="nope"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="4"
                                    v-if="indicacao.telefone4"
                                    >
                                    <v-text-field
                                        v-model="indicacao.telefone4"
                                        label="Telefone 4"
                                        autocomplete="nope"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="4"
                                    v-if="indicacao.telefone5"
                                    >
                                    <v-text-field
                                        v-model="indicacao.telefone5"
                                        label="Telefone 5"
                                        autocomplete="nope"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="4"
                                    v-if="indicacao.telefone6"
                                    >
                                    <v-text-field
                                        v-model="indicacao.telefone6"
                                        label="Telefone 6" 
                                        autocomplete="nope"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="4"
                                    v-if="indicacao.telefone7"
                                    >
                                    <v-text-field
                                        v-model="indicacao.telefone7"
                                        label="Telefone 7"
                                        autocomplete="nope"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="4"
                                    v-if="indicacao.telefone8"
                                    >
                                    <v-text-field
                                        v-model="indicacao.telefone8"
                                        label="Telefone 8"
                                        autocomplete="nope"
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                    cols="12"
                                    md="4"
                                    >
                                    <v-text-field
                                        v-model="indicacao.celular"
                                        label="Celular"
                                        autocomplete="nope"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="4"
                                    v-if="indicacao.celular2"
                                    >
                                    <v-text-field
                                        v-model="indicacao.celular2"
                                        label="Celular 2"
                                        autocomplete="nope"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="4"
                                    v-if="indicacao.celular3"
                                    >
                                    <v-text-field
                                        v-model="indicacao.celular3"
                                        label="Celular 3"
                                        autocomplete="nope"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="4"
                                    v-if="indicacao.celular4"
                                    >
                                    <v-text-field
                                        v-model="indicacao.celular4"
                                        label="Celular 4"
                                        autocomplete="nope"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="4"
                                    v-if="indicacao.celular5"
                                    >
                                    <v-text-field
                                        v-model="indicacao.celular5"
                                        label="Celular 5"
                                        autocomplete="nope"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="4"
                                    v-if="indicacao.celular6"
                                    >
                                    <v-text-field
                                        v-model="indicacao.celular6"
                                        label="Celular 6" 
                                        autocomplete="nope"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="4"
                                    v-if="indicacao.celular7"
                                    >
                                    <v-text-field
                                        v-model="indicacao.celular7"
                                        label="Celular 7"
                                        autocomplete="nope"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="4"
                                    v-if="indicacao.celular8"
                                    >
                                    <v-text-field
                                        v-model="indicacao.celular8"
                                        label="Celular 8"
                                        autocomplete="nope"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col
                                    cols="12"
                                    md="4"
                                    >
                                    <v-text-field
                                        v-model="indicacao.idade"
                                        label="Idade"
                                        autocomplete="nope"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="4"
                                    >
                                    <v-text-field
                                        v-model="indicacao.data_nascimento"
                                        label="Data nascimento"
                                        required
                                        autocomplete="nope"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col
                                    cols="12"
                                    md="4"
                                    >
                                    <v-text-field
                                        v-model="indicacao.cpf"
                                        label="Cpf"
                                        required
                                        autocomplete="nope"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="4"
                                    >
                                    <v-text-field
                                        v-model="indicacao.cnpj"
                                        label="Cnpj"
                                        required
                                        autocomplete="nope"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="4"
                                    >
                                    <v-text-field
                                        v-model="indicacao.segmento"
                                        label="Segmento"
                                        required
                                        autocomplete="nope"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>
<script>
    export default {
        data() {
            return {
                valid: false,
                indicacao: {
                    origem: {
                        nome: ''
                    },
                    tipo: {
                        nome: ''
                    },
                    profissao: {
                        nome: ''
                    }
                }
            }
        },
        methods: {
            voltar() {
                this.$router.go(-1);
            },
        },
        async mounted() {
            console.log(this.$route.params.id);
            await this.$api.$get('v1/indicacoes/' + this.$route.params.id)
            .then( response => {
                this.indicacao = response
                console.log(response)
            })
        }
    };
</script>