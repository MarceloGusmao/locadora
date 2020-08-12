import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import FormAgencia from '@/components/FormAgencia'
import FormCarro from '@/components/FormCarro'
import FormMoto from '@/components/FormMoto'
import Seguro from '@/components/Seguro'
import Agencia from '@/components/Agencia'
import AlterarAgencia from '@/components/AlterarAgencia'
import Carro from '@/components/Carro'
import AlterarCarro from '@/components/AlterarCarro'
import Moto from '@/components/Moto'
import AlterarMoto from '@/components/AlterarMoto'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cadastroagencia',
      name: 'FormAgencia',
      component: FormAgencia
    },
    {
      path: '/cadastrarcarro',
      name: 'FormCarro',
      component: FormCarro
    },
    {
      path: '/cadastrarmoto',
      name: 'FormMoto',
      component: FormMoto
    },
    {
      path: '/seguro',
      name: 'Seguro',
      component: Seguro
    },
    {
      path: '/agencia',
      name: 'Agencia',
      component: Agencia
    },
    {
      path: '/alteraragencia/:id',
      name: 'AlterarAgencia',
      component: AlterarAgencia
    },
    {
      path: '/carro',
      name: 'carro',
      component: Carro
    },
    {
      path: '/alterarcarro/:id',
      name: 'AlterarCarro',
      component: AlterarCarro
    },
    {
      path: '/moto',
      name: 'moto',
      component: Moto
    },
    {
      path: '/alterarmoto/:id',
      name: 'AlterarMoto',
      component: AlterarMoto
    }
  ]
})
