<template>
    <div class= "agencia">
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">CNPJ</th>
                <th scope="col">Inscrição Estadual</th>
                <th scope="col">Gerente Responsável</th>
                <th scope="col">Telefone</th>
                <th scope="col">Endereço</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for = "agencia in agencias" :key=agencia.id>
                <td id = "cnpj1">{{ agencia.cnpj }}</td>
                <td id = "inscEstadual">{{ agencia.inscEstadual }}</td>
                <td id = "gerenteResponsavel">{{ agencia.gerenteResponsavel }}</td>
                <td id = "telefone">{{ agencia.telefone }}</td>
                <td id = "localidade">{{ agencia.localidade }}</td>
                <td><button type="button" class="btn btn-primary" @click="pegarAgencia(agencia.cnpj)">Editar</button>
                    <button @click="apagar(agencia)" type="button" class="btn btn-danger">Excluir</button>
                </td>
                </tr>
            </tbody>
        </table>
        <button type="button" class="btn btn-primary" onClick="location.href='#/cadastroagencia'">Cadastrar Novo</button>
    </div>
</template>
<script>

import Agencia from '@/servicos/agencia'

export default {
  data () {
    return {
      agencias: [],
      erro: []
    }
  },

  mounted () {
    this.listar()
  },

  methods: {
    listar () {
      Agencia.listar().then(resposta => {
        console.log(resposta)
        this.agencias = resposta.data
      }).catch(e => {
        console.log(e)
      })
    },

    apagar (agencia) {
      if (confirm('Deseja apagar esta agencia?')) {
        Agencia.apagar(agencia).then(resposta => {
          this.listar()
          this.erro = {}
        }).catch(e => {
          this.erro = e.resposta.data.erro
        })
      }
    },

    pegarAgencia (cnpj) {
      var id = 0
      var agencia = null
      console.log(cnpj)
      for (var i = 0; i < this.agencias.length; i++) {
        if (this.agencias[i].cnpj === cnpj) {
          console.log(this.agencias[i])
          id = this.agencias[i].id
          agencia = this.agencias[i]
        }
      }
      Agencia.pegarAgencia(agencia).then(resposta => {
        window.location.href = '#/alteraragencia/' + id
      })
    }
  }
}

</script>
<style>
    .agencia{
        padding-top: 5%;
        padding-right: 5%;
        padding-left: 5%;
    }
</style>
