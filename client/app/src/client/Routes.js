
import Landing from './components/Landing'
import Register from './components/Register'
import Profile from './components/Profile'
import LoginPage from './components/Login'
import Group2 from './components/Group2'
import Events from './components/Event'

export default {
  routes: [
    {
        component:Landing,
        path: '/',
        exact: true,
        id: 1
    },
    {
        component: LoginPage,
        path: '/login',
        id: 2
    },
    {
      component :Register,
      path:"/register",
      id:3
    },
    {
      ...Profile,
      path:"/profile/:id",
      id:4
    },
    {
      ...Group2,
      path:"/group/:id",
      id:5
    },
    {
      ...Events,
      path:"/event/:id",
      id:6
    },

  ],
  privateRoutes:[

  ]
}
