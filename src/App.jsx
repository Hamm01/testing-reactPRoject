import { useState } from 'react'
import Home from './pages/Home'
import Store from './pages/Store'
import About from './pages/About'
function App() {
  let component
  switch (window.location.pathname) {
    case '/':
      component = <Home />
      break
    case '/store':
      component = <Store />
      break
    case '/about':
      component = <About />
      break
  }

  return component
}

export default App
