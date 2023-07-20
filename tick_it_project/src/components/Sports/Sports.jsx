import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Sports({ allSports, setAllSports }){

    
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

    let navigate = useNavigate()
    const showSport = (sport) => {
        console.log(sport.id)
        navigate(`${sport.title}`)
    }
   
    return(
        <div className='event-list'>
            {allSports.map((sport,key)=>(
                <div key={key} onClick={()=>showSport(sport)} className='sport'>
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