import { Routes,Route } from 'react-router-dom'
import Venues from './Venues'
import AllConcerts from './Music/Concerts'
import Sports from './Sports/Sports'
import Sport from './Sports/Sport'
import Venue from './Venue'

export default function Main({allSports, setAllSports, allVenues, setAllVenues}){
    return(
        <div>
            <Routes>
                {/* <Route path='/' element={<Main />}/> */}
                <Route path='/venues' element={<Venues allVenues={allVenues} setAllVenues={setAllVenues}/>}/>
                <Route path='/venues/:photo_url' element={<Venue allVenues={allVenues}/>}/>
                {/* <Route path='/venues/:photo_url/:title' element={<Sport allSports={allSports}/>}/> */}
                <Route path='/concerts' element={<AllConcerts />}/>
                <Route path='/sports' element={<Sports allSports={allSports} setAllSports={setAllSports}/>}/>
                <Route path='/sports/:title' element={<Sport allSports={allSports} />}/>
            </Routes>
       </div>
    )
}