<template>
    <div class = "formCarro">
        <h1>Cadastrar Carro</h1>
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
                <label for="inputagencia">Agencia</label>
                <input type="text" class="form-control" id="inputagencia" placeholder="Agencia responsável" required v-model="carro.agencia">
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
            <button type="submit" class="btn btn-primary" @click="Salvar(carro)">Salvar</button>
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
      carros: [],
      erro: []
    }
  },

  methods: {
    Salvar () {
      Carro.salvar(this.carro).then(resposta => {
        this.carro = {}
        alert('Cadastro feito com sucesso')
        window.location.href = '#/carro'
        this.erro = {}
      }).catch(e => {
        this.erro = e.response.data.erro
      })
    }
  }
}
</script>
<style>
    .formCarro{
        padding-left: 5%;
        padding-right: 5%;
        padding-top: 2%;
    }
</style>
