import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Nav from './components/Nav'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <div>
        <Nav />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
