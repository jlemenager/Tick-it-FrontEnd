import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'


export default function Venue({ allVenues }){

    const [oneVenue, setOneVenue] = useState('')

    let { venue } = useParams()
    
    useEffect(()=>{
       let selectedVenue = allVenues.find(venue=>oneVenue.venue == venue)
       setOneVenue(selectedVenue)
    },[oneVenue.venue, venue])

    let navigate = useNavigate()
    const showEvent = (event) => {
        navigate(`${event.title}`)
    }
    return(
        <div className='venuePage'>
            {
            venue.map((event, key) =>(
                <div key={key} onClick={()=>showEvent(event)}>
                <h1>{event.title}</h1>
                <h2>{event.artist}</h2>
                {/* <h3>{event.venue}</h3> */}
                {/* <img src={event.image_url} alt="event image" /> */}
                <p>{event.date}</p>
                <p>{event.price}</p>  
                </div>
            )
            )}
        </div>
    )
}