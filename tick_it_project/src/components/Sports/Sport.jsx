import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


export default function Sport({ allSports }){

    const [sport, setSport] = useState('')

    let { title } = useParams()
    
    useEffect(()=>{
       let selectedSport = allSports.find(sport=>sport.title == title)
       setSport(selectedSport)
    },[sport.title, title])
    return(
        <div className='sportPage'>
            <h1>{sport.title}</h1>
            <h2>{sport.artist}</h2>
            {/* <h3>{sport.venue}</h3> */}
            {/* <img src={sport.image_url} alt="sport image" /> */}
            <p>{sport.date}</p>
            <p>{sport.price}</p>
        </div>
    )
}