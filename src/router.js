import Vue from 'vue'
import Router from 'vue-router'
import Portada from './components/Portada'
import SobreMi from './components/SobreMi'
import Contacto from './components/Contacto'
import Post from './components/Post'
import Articulo from './components/Articulo'
import NotFound from './components/NotFound'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      component: Portada,
      name: 'portada'
    },
    {
      path: '/sobremi',
      component: SobreMi,
      name: 'sobreMi'
    },
    {
      path: '/contacto',
      component: Contacto
    },
    {
      path: '/post/:number',
      component: Post,
      children: [{
        path: '',
        component: Articulo,
        name: 'articulo'
      }, ]
    },
    {
      path: '*',
      component: NotFound
    },
  ]
})