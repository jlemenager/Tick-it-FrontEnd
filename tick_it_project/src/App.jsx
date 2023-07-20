import { useEffect, useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Nav from './components/Nav'
import AllConcerts from './components/Music/Concerts'
import Sports from './components/Sports/Sports'
import UserContext from './UserContext'
import axios from 'axios'
import './App.css'

function App() {
  
  
  const [allVenues, setAllVenues] = useState([])
  const [allSports, setAllSports] = useState([])
  const [allConcerts, setAllConcerts] = useState([])
  const [concert, setConcert] = useState()
  const [sport, setSport] = useState()

  // const getConcertsAPI = async() => {
  //   const response = await axios.get('http://localhost:8000/events')
  //   // setAllConcerts(...allConcerts, response.data[0])
  //   for (let i = 0; i<response.data.length;i++){
  //     response.data[i].is_concert ? setAllConcerts(...allConcerts, response.data[i]) : console.log('not a concert')
  //   } 
  // }

  // const getSportsAPI = async() => {
  //   const response = await axios.get('http://localhost:8000/events')
  //   for (let i = 0; i<response.data.event.length;i++){
  //     response.data[i].is_concert ? setAllSports(...allSports, response.data[i]) : console.log('not a sport')
  //   }
  // }


  return (
    <div className="big-app">

   

    <div className="app">
      <header>
        <Header />
      </header>
      <main>
        <Main allSports={allSports} setAllSports={setAllSports} allVenues={allVenues} setAllVenues={setAllVenues}/>
      </main>
      <div>
        <Nav />
      </div>
    </div>
    </div>
  ) 
}

export default App
