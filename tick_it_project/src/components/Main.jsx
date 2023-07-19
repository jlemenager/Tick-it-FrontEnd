import { Routes,Route } from 'react-router-dom'
import Venues from './Venues'
import AllConcerts from './Music/Concerts'
import Sports from './Sports/Sports'

export default function Main(){
    return(
        <div>
            <Routes>
                {/* <Route path='/' element={<Main />}/> */}
                <Route path='/venues' element={<Venues />}/>
                <Route path='/concerts' element={<AllConcerts />}/>
                <Route path='/sports' element={<Sports />}/>
            </Routes>
       </div>
    )
}