import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'


export default function Venue({ allVenues }){

    const [venue, setVenue] = useState('')

    let { name } = useParams()
    
console.log(allVenues)

    useEffect(()=>{
       let selectedVenue = allVenues.find(venue=>venue.name == name)
       console.log(selectedVenue)
       setVenue(selectedVenue)
       console.log(venue)
    },[venue.name, name])

    
    return Venue ? (
        <div className='venuePage'>
                <div>
                <h1>{venue.name}</h1>
                <h2>{venue.address}</h2>
                <h3>{venue.description}</h3>
                <img src={venue.photo_url} alt="venue image" />
                <p>{venue.venue_url}</p> 
                </div>
        </div>
    ) : console.log('Venue is not defined')
}