import { useState, useEffect } from 'react'
import UserContext from '../../UserContext'
import axios from 'axios'

export default function Sports(){

    const [allSports, setAllSports] = useState([])
    const getSportsAPI = async() => {
        const response = await axios.get('http://localhost:8000/events')
        const sports = []
        for (let i = 0; i<response.data.length;i++){
          response.data[i].is_sports_event ? sports.push(response.data[i]) : console.log('not a sport')
        } 
        setAllSports(sports)
      }

      useEffect(()=>{
        getSportsAPI()
      },[])
   
    return(
        <div className='event-list'>
            {allSports.map((sport,key)=>(
                <div key={key} className='sport'>
                    <h2>{sport.title}</h2>
                    <h2>{sport.artist}</h2>
                    <h3>{sport.genre}</h3>
                    <h5>Date: {sport.date}</h5>
                    <p>${sport.price}</p>
                </div>
            ))}
        </div>
    )
}