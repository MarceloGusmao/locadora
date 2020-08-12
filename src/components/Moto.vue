<template>
    <div class= "moto">
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Renavam</th>
                <th scope="col">Modelo</th>
                <th scope="col">Marca</th>
                <th scope="col">Ano</th>
                <th scope="col">Cor</th>
                <th scope="col">Cilindradas</th>
                <th scope="col">Tipo de Combustível</th>
                <th scope="col">Freio</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for = "moto in motos" :key=moto.id>
                <td>{{moto.renavam}}</td>
                <td>{{moto.modelo}}</td>
                <td>{{moto.marca}}</td>
                <td>{{moto.ano}}</td>
                <td>{{moto.cor}}</td>
                <td>{{moto.cilindradas}}</td>
                <td>{{moto.tipoCombustivel}}</td>
                <td>{{moto.freios}}</td>
                <td><button type="button" class="btn btn-primary" @click="pegarMoto(moto.renavam)">Editar</button>
                    <button type="button" class="btn btn-danger" @click="apagar(moto)">Excluir</button></td>
                </tr>
            </tbody>
        </table>
        <button type="button" class="btn btn-primary" onClick="location.href='#/cadastrarmoto'">Cadastrar Novo</button>
    </div>
</template>
<script>

import Moto from '@/servicos/moto'

export default {
  data () {
    return {
      motos: [],
      erro: []
    }
  },

  mounted () {
    this.listar()
  },

  methods: {
    listar () {
      Moto.listar().then(resposta => {
        this.motos = resposta.data
      }).catch(e => {
        console.log(e)
      })
    },

    apagar (moto) {
      if (confirm('Deseja apagar este moto?')) {
        Moto.apagarMoto(moto).then(resposta => {
          this.listar()
          this.erro = {}
        }).catch(e => {
          this.erro = e.resposta.data.erro
        })
      }
    },

    pegarMoto (renavam) {
      var id = 0
      var moto = null
      console.log(renavam)
      for (var i = 0; i < this.motos.length; i++) {
        if (this.motos[i].renavam === renavam) {
          console.log(this.motos[i])
          id = this.motos[i].id
          moto = this.motos[i]
        }
      }
      Moto.pegarMoto(moto).then(resposta => {
        window.location.href = '#/alterarmoto/' + id
      })
    }

  }
}

</script>
<style>
    .moto{
        padding-top: 5%;
        padding-right: 5%;
        padding-left: 5%;
    }
</style>
