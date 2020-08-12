import { http } from './confi'

export default{
  listar: () => {
    return http.get('moto')
  },

  pegarMoto: (moto) => {
    return http.get('alteramoto/' + moto.id, { data: moto })
  },

  editMoto: (id, moto) => {
    return http.get('alteramoto/' + id, moto)
  },

  salvar: (moto) => {
    return http.post('cadastromoto', moto)
  },

  atualizarMoto: (moto) => {
    return http.post('alteramoto/' + moto.id, moto)
  },

  apagarMoto: (moto) => {
    return http.delete('moto/' + moto.id, { data: moto })
  }
}
