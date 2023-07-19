import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Nav from './components/Nav'
import Footer from './components/Footer'
import './App.css'

function App() {

  const [allConcerts, setAllConcerts] = useState()

  return (
    // <div className="big-app">

    // <UserContext.Provider
    //   value={{
    //       allConcerts,
    //       setAllConcerts
    //   }}
    //   >
    //     <Concerts/>
    // </UserContext.Provider>



    <div className="app">
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
    // </div>
  )
}

export default App
