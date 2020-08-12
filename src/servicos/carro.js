import { http } from './confi'

export default{
  listar: () => {
    return http.get('carro')
  },

  pegarCarro: (carro) => {
    return http.get('alteracarro/' + carro.id, { data: carro })
  },

  editCarro: (id, carro) => {
    return http.get('alteracarro/' + id, carro)
  },

  salvar: (carro) => {
    return http.post('cadastrocarro', carro)
  },

  atualizarCarro: (carro) => {
    return http.post('alteracarro/' + carro.id, carro)
  },

  apagarCarro: (carro) => {
    return http.delete('carro/' + carro.id, { data: carro })
  }
}
