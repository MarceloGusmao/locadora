<template>
    <div class = "formMoto">
        <h1>Alterar Moto</h1>
        <hr>
        <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputrenavam">Renavam</label>
                <input type="text" class="form-control" id="inputrenavam" v-mask="'###########'" placeholder="00000000000" required v-model="moto.renavam">
                </div>
                <div class="form-group col-md-6">
                <label for="inputmodelo">Modelo</label>
                <input type="text" class="form-control" id="inputmodelo" placeholder="Modelo da Moto" required v-model="moto.modelo">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputmarca">Marca</label>
                    <input type="text" class="form-control" id="inputmarca" placeholder="Marca da Moto" required v-model="moto.marca">
                </div>
                <div class="form-group col-md-6">
                    <label for="inputano">Ano</label>
                    <input type="text" class="form-control" id="inputano" v-mask="'####'" placeholder="Ano da Moto" required v-model="moto.ano">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputcor">Cor</label>
                    <input type="text" class="form-control" id="inputcor"  placeholder="Cor da Moto" required v-model="moto.cor">
                </div>
                <div class="form-group col-md-6">
                    <label for="inputcombustivel">Tipo de Combustível</label>
                    <input type="text" class="form-control" id="inputcombustivel" placeholder="Ex: Flex" required v-model="moto.tipoCombustivel">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputcilindradas">Cilindradas</label>
                    <input type="text" class="form-control" id="inputcilindradas" v-mask="'####'"  placeholder="Cilindradas da Moto" required v-model="moto.cilindradas">
                </div>
                <div class="form-group col-md-6">
                    <label for="inputfreio">Tipo de Freio</label>
                    <input type="text" class="form-control" id="inputfreio" placeholder="Ex: Disco" required v-model="moto.freios">
                </div>
            </div>
            <button type="submit" class="btn btn-primary" @click="alterar(moto)">Salvar</button>
            <button type="button" class="btn btn-danger" onClick="location.href='#/moto'">Cancelar</button>
        </form>
    </div>
</template>
<script>

import Moto from '@/servicos/moto'

export default {
  data () {
    return {
      moto: {
        renavam: '',
        modelo: '',
        marca: '',
        ano: '',
        cor: '',
        tipoCombustivel: '',
        acessorios: '',
        tipoFreio: '',
        agencia: ''
      },
      erro: []
    }
  },

  mounted (moto) {
    const id = this.$route.params.id
    Moto.editMoto(id, moto).then(resposta => {
      this.moto = resposta.data
      document.getElementById('inputrenavam').value = this.moto.renavam
      document.getElementById('inputmodelo').value = this.moto.modelo
      document.getElementById('inputmarca').value = this.moto.marca
      document.getElementById('inputano').value = this.moto.ano
      document.getElementById('inputcor').value = this.moto.cor
      document.getElementById('inputcombustivel').value = this.moto.tipoCombustivel
      document.getElementById('inputcilindradas').value = this.moto.cilindradas
      document.getElementById('inputfreio').value = this.moto.freios
    })
  },

  methods: {
    alterar (moto) {
      Moto.atualizarMoto(moto).then(resposta => {
        this.moto = {}
        this.erro = {}
        alert('Atualizado com sucesso')
        window.location.href = '#/moto'
      })
    }
  }
}
</script>
<style>
    .formMoto{
        padding-left: 5%;
        padding-right: 5%;
        padding-top: 5%;
    }
</style>
