<template>
    <div class= "carro">
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Renavam</th>
                <th scope="col">Modelo</th>
                <th scope="col">Marca</th>
                <th scope="col">Ano</th>
                <th scope="col">Cor</th>
                <th scope="col">Potencia</th>
                <th scope="col">Tipo de Combustível</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for = "carro in carros" :key=carro.id>
                <td>{{carro.renavam}}</td>
                <td>{{carro.modelo}}</td>
                <td>{{carro.marca}}</td>
                <td>{{carro.ano}}</td>
                <td>{{carro.cor}}</td>
                <td>{{carro.potencia}}</td>
                <td>{{carro.tipoCombustivel}}</td>
                <td><button type="button" class="btn btn-primary" @click="pegarCarro(carro.renavam)">Editar</button>
                    <button type="button" class="btn btn-danger" @click="apagar(carro)">Excluir</button></td>
                </tr>
            </tbody>
        </table>
        <button type="button" class="btn btn-primary" onClick="location.href='#/cadastrarcarro'">Cadastrar Novo</button>
    </div>
</template>
<script>

import Carro from '@/servicos/carro'

export default {
  data () {
    return {
      carros: [],
      erro: []
    }
  },

  mounted () {
    this.listar()
  },

  methods: {
    listar () {
      Carro.listar().then(resposta => {
        this.carros = resposta.data
      }).catch(e => {
        console.log(e)
      })
    },

    apagar (carro) {
      if (confirm('Deseja apagar este carro?')) {
        Carro.apagarCarro(carro).then(resposta => {
          this.listar()
          this.erro = {}
        }).catch(e => {
          this.erro = e.resposta.data.erro
        })
      }
    },

    pegarCarro (renavam) {
      var id = 0
      var carro = null
      console.log(renavam)
      for (var i = 0; i < this.carros.length; i++) {
        if (this.carros[i].renavam === renavam) {
          console.log(this.carros[i])
          id = this.carros[i].id
          carro = this.carros[i]
        }
      }
      Carro.pegarCarro(carro).then(resposta => {
        window.location.href = '#/alterarcarro/' + id
      })
    }

  }
}

</script>
<style>
    .carro{
        padding-top: 5%;
        padding-right: 5%;
        padding-left: 5%;
    }
</style>
