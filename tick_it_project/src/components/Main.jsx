import { Routes,Route } from 'react-router-dom'
import Sports from './Sports'

export default function Main(){
    return(
        <div>
            <Routes>
                <Route path='/venues' element={<Main />}/>
                {/* <Route path='/concerts' element={<Concerts />}/> */}
                <Route path='/sports' element={<Sports />}/>
            </Routes>
       </div>
    )
}