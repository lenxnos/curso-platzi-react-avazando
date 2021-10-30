import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Router } from '@reach/router'
import { Detail } from './pages/Details'
import { NavBar } from './components/Navbar'

export const App = () => {
  return (
    <div>
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>
      <NavBar />
      <GlobalStyles />
    </div>
  )
}
