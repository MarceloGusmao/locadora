<template>
    <div class = "formAgencia">
        <h1>Alterar Agência</h1>
        <hr>
        <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputcnpj">CNPJ</label>
                <input type="text" class="form-control" id="inputcnpj" v-mask="'##.###.###/####-##'" placeholder="00.000.000/0000-00" required v-model="agencia.cnpj">
                </div>
                <div class="form-group col-md-6">
                <label for="inputinsestadual">Inscrição Estadual</label>
                <input type="text" class="form-control" id="inputinscestadual" placeholder="Inscrição Estadual" required v-model="agencia.inscEstadual">
                </div>
            </div>
            <div class="form-group">
                <label for="inputAddress">Endereço</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="Rua dos Bobos, nº 0" required v-model="agencia.localidade">
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputtelefone">Telefone</label>
                    <input type="telefone" class="form-control" id="inputtelefone" v-mask="'(##)#####-####'" placeholder="(00)00000-0000" required v-model="agencia.telefone">
                </div>
                <div class="form-group col-md-6">
                    <label for="inputAddress2">Gerente</label>
                    <input type="telefone" class="form-control" id="inputAddress2" placeholder="Gerente da agencia" v-model="agencia.gerenteResponsavel">
                </div>
            </div>
            <button type="submit" class="btn btn-primary" @click = "alterar(agencia)">Salvar</button>
            <button type="button" class="btn btn-danger" onClick="location.href='#/agencia'">Cancelar</button>
        </form>
    </div>
</template>
<script>

import Agencia from '@/servicos/agencia'

export default {
  data () {
    return {
      agencia: {
        cnpj: '',
        localidade: '',
        gerenteResponsavel: '',
        telefone: '',
        inscEstadual: ''
      },
      erro: []
    }
  },

  mounted (agencia) {
    const id = this.$route.params.id
    Agencia.editAgencia(id, agencia).then(resposta => {
      this.agencia = resposta.data
      document.getElementById('inputcnpj').value = this.agencia.cnpj
      document.getElementById('inputinscestadual').value = this.agencia.inscEstadual
      document.getElementById('inputAddress').value = this.agencia.localidade
      document.getElementById('inputtelefone').value = this.agencia.telefone
      document.getElementById('inputAddress2').value = this.agencia.gerenteResponsavel
    })
  },

  methods: {
    alterar (agencia) {
      Agencia.atualizar(agencia).then(resposta => {
        this.agencia = {}
        this.erro = {}
        alert('Atualizado com sucesso')
        window.location.href = '#/agencia'
      })
    }
  }
}

</script>
<style>
    .formAgencia{
        padding-left: 5%;
        padding-right: 5%;
        padding-top: 5%;
    }
</style>
