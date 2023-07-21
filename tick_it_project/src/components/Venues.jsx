import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const AllVenues = ({allVenues, setAllVenues}) => {
    
    const getVenuesAPI = async() => {
        const response = await axios.get('https://tick-itapi-production.up.railway.app/venues')
        setAllVenues(response.data)
      }

    useEffect(()=>{
        getVenuesAPI()
      },[])

    let navigate = useNavigate()
    const showVenue = (name) => {
        navigate(`${name}`)
    }

    return allVenues ? (
        <div className="event-list">
            {
                allVenues.map((venue,key) => (
                    <div key={key} onClick={()=>showVenue(venue.name)} className="venue">
                        <h2>{venue.name}</h2>
                        <h2>{venue.address}</h2>
                    </div>
                ))
            }
        </div>
    ) : console.log('allVenues isnt defined')
}

export default AllVenues