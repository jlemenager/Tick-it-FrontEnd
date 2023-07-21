import { Routes,Route } from 'react-router-dom'
import Venues from './Venues'
import AllConcerts from './Music/Concerts'
import Concert from './Music/Concert'
import Sports from './Sports/Sports'
import Sport from './Sports/Sport'
import Venue from './Venue'
import Home from './Home'

export default function Main({allSports, setAllSports, allConcerts, setAllConcerts, allVenues, setAllVenues, tickets, setTickets}){
    return(
        <div className='main'>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/venues' element={<Venues allVenues={allVenues} setAllVenues={setAllVenues}/>}/>
                <Route path='/venues/:name' element={<Venue allVenues={allVenues}/>}/>
                {/* <Route path='/venues/:photo_url/:title' element={<Sport allSports={allSports}/>}/> */}
                <Route path='/concerts' element={<AllConcerts allConcerts={allConcerts} setAllConcerts={setAllConcerts} tickets={tickets} setTickets={setTickets}/>}/>
                <Route path='/concerts/:title' element={<Concert allConcerts={allConcerts} tickets={tickets} setTickets={setTickets}/>}/>
                <Route path='/sports' element={<Sports allSports={allSports} setAllSports={setAllSports} tickets={tickets} setTickets={setTickets}/>}/>
                <Route path='/sports/:title' element={<Sport allSports={allSports} tickets={tickets} setTickets={setTickets} />}/>
            </Routes>
       </div>
    )
}