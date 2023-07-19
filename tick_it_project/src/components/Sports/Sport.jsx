import { useEffect,useContext } from 'react'
import UserContext from '../../UserContext'
import axios from 'axios'

export default function Sports(){

    const {sport, setSport} = useContext(UserContext)
    
    useEffect(()=>{
        const getSportAPI = async() => {
            const response = await axios.get()
            setSport(response.data.sport)
        }
        getSportAPI()
    },[])
    return(
        <div className='sportPage'>
            <h2>{sport.name}</h2>
            <h3>{sport.venue}</h3>
            <img src={sport.image_url} alt="sport image" />
            <p>{sport.date}</p>
            <p>{sport.price}</p>
        </div>
    )
}