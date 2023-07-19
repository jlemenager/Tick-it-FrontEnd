import { Routes,Route } from 'react-router-dom'
import Venues from './Venues'
import Concerts from './Music/Concerts'
import Sports from './Sports/Sports'

export default function Main(){
    return(
        <div>
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path='/venues' element={<Venues />}/>
                <Route path='/concerts' element={<Concerts />}/>
                <Route path='/sports' element={<Sports />}/>
            </Routes>
       </div>
    )
}