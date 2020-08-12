import { http } from './confi'

export default{

  listar: () => {
    return http.get('agencia')
  },

  pegarAgencia: (agencia) => {
    return http.get('alteraragencia/' + agencia.id, { data: agencia })
  },

  editAgencia: (id, agencia) => {
    return http.get('alteraragencia/' + id, agencia)
  },

  salvar: (agencia) => {
    return http.post('cadastroagencia', agencia)
  },

  atualizar: (agencia) => {
    return http.post('alteraragencia/' + agencia.id, agencia)
  },

  apagar: (agencia) => {
    return http.delete('agencia/' + agencia.id, { data: agencia })
  }

}
