<template>
    <div class = "formCarro">
        <h1>Alterar Carro</h1>
        <hr>
        <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputrenavam">Renavam</label>
                <input type="text" class="form-control" id="inputrenavam" v-mask="'###########'" placeholder="00000000000" required v-model="carro.renavam">
                </div>
                <div class="form-group col-md-6">
                <label for="inputmodelo">Modelo</label>
                <input type="text" class="form-control" id="inputmodelo" placeholder="Modelo do Carro" required v-model="carro.modelo">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputmarca">Marca</label>
                    <input type="text" class="form-control" id="inputmarca" placeholder="Marca do Carro" required v-model="carro.marca">
                </div>
                <div class="form-group col-md-6">
                    <label for="inputano">Ano</label>
                    <input type="text" class="form-control" id="inputano" v-mask="'####'" placeholder="Ano do Carro" required v-model="carro.ano">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputcor">Cor</label>
                    <input type="text" class="form-control" id="inputcor"  placeholder="Cor do Carro" required v-model="carro.cor">
                </div>
                <div class="form-group col-md-6">
                    <label for="inputcombustivel">Tipo de Combustível</label>
                    <input type="text" class="form-control" id="inputcombustivel" placeholder="Ex: Flex" required v-model="carro.tipoCombustivel">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputacessorio">Acessórios</label>
                    <input type="text" class="form-control" id="inputacessorio"  placeholder="Acessórios que o carro possui" v-model="carro.acessorios">
                </div>
                <div class="form-group col-md-6">
                    <label for="inputpotencia">Potência</label>
                    <input type="text" class="form-control" id="inputpotencia" placeholder="0.0" v-mask="'#.#'" required v-model="carro.potencia">
                </div>
            </div>
            <button type="submit" class="btn btn-primary" @click="alterar(carro)">Salvar</button>
            <button type="button" class="btn btn-danger" onClick="location.href='#/carro'">Cancelar</button>
        </form>
    </div>
</template>
<script>

import Carro from '@/servicos/carro'

export default {
  data () {
    return {
      carro: {
        renavam: '',
        modelo: '',
        marca: '',
        ano: '',
        cor: '',
        tipoCombustivel: '',
        acessorios: '',
        potencia: '',
        agencia: ''
      },
      erro: []
    }
  },

  mounted (carro) {
    const id = this.$route.params.id
    Carro.editCarro(id, carro).then(resposta => {
      this.carro = resposta.data
      document.getElementById('inputrenavam').value = this.carro.renavam
      document.getElementById('inputmodelo').value = this.carro.modelo
      document.getElementById('inputmarca').value = this.carro.marca
      document.getElementById('inputano').value = this.carro.ano
      document.getElementById('inputcor').value = this.carro.cor
      document.getElementById('inputcombustivel').value = this.carro.tipoCombustivel
      document.getElementById('inputacessorio').value = this.carro.acessorios
      document.getElementById('inputpotencia').value = this.carro.potencia
    })
  },

  methods: {
    alterar (carro) {
      Carro.atualizarCarro(carro).then(resposta => {
        this.carro = {}
        this.erro = {}
        alert('Atualizado com sucesso')
        window.location.href = '#/carro'
      })
    }
  }
}

</script>
<style>
    .formCarro{
        padding-left: 5%;
        padding-right: 5%;
        padding-top: 5%;
    }
</style>
