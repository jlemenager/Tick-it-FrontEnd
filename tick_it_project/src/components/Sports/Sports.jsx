import { useEffect,useContext } from 'react'
import UserContext from '../../UserContext'
import axios from 'axios'

export default function Sports(){

    const {allsports, setAllSports} = useContext(UserContext)
    
    useEffect(()=>{
        const getSportsAPI = async() => {
            const response = await axios.get()
            setAllSports(response.data.sports)
        }
        getSportsAPI()
    },[])
    return(
        <div className='sports'>
            {allsports.map(sport=>{
                <div key={sport.name} className='sport'>
                    <h3>{sport.name}</h3>
                    <h5>{sport.venue}</h5>
                    <img src={sport.image_url} alt="sport image" />
                    <p>{sport.date}</p>
                    <p>{sport.price}</p>
                </div>
            })}
        </div>
    )
}