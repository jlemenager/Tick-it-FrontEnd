import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const AllVenues = ({allVenues, setAllVenues}) => {
    
    const getVenuesAPI = async() => {
        const response = await axios.get('http://localhost:8000/venues')
        setAllVenues(response.data)
      }

    useEffect(()=>{
        getVenuesAPI()
      },[])
    
    let navigate = useNavigate()
    const showVenue = (venue) => {
        navigate(`${venue.venue}`)
    }

    return allVenues ? (
        <div className="event-list">
            {
                allVenues.map((venue,key) => (
                    <div key={key} onClick={()=>showVenue(venue)} className="concert">
                        <img src={venue.photo_url} />
                        <h2>Location Name Here</h2>
                    </div>
                ))
            }
        </div>
    ) : console.log('allVenues isnt defined')
}

export default AllVenues