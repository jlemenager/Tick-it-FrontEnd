import { Routes,Route } from "react-router-dom";
import Main from "./Main";
import Concerts from './Concerts'
import Sports from './Sports'

export default function Home(){
    return(
        <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/concerts' element={<Concerts />}/>
            <Route path='/sports' element={<Sports />}/>
        </Routes>
    )
}