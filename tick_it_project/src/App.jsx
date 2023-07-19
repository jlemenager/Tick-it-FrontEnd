import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Nav from './components/Nav'
import AllConcerts from './components/Music/Concerts'
import UserContext from './UserContext'
import './App.css'

function App() {

  // const [allConcerts, setAllConcerts] = useState()
  // const [concert, setConcert] = useState()
  // const [allSports, setAllSports} = useState()
  // const [sport, setSport] = useState()


  return (
    // <div className="big-app">

    // <UserContext.Provider
    //   value={{
    //       allConcerts,
    //       setAllConcerts,
            // concert,
            // setConcert,
            // allSports,
            // setAllSports,
            // sport,
            // setSport
    //   }}
    //   >
    //     <AllConcerts/>
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
    </div>
    // </div>
  )
}

export default App
