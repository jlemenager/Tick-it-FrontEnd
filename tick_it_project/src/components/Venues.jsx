import { useEffect, useState, useContext } from "react"
import axios from "axios"

const AllVenues = () => {
    
    const [allVenues, setAllVenues] = useState([])
    const getVenuesAPI = async() => {
        const response = await axios.get('http://localhost:8000/events')
        setAllVenues(response.data)
      }

    useEffect(()=>{
        getVenuesAPI()
      },[])

    return allVenues ? (
        <div className="event-list">
            {
                allVenues.map((venue,key) => (
                    <div key={key} className="concert">
                        <h2>{venue.title}</h2>
                        <h2>{venue.artist}</h2>
                        <h3>{venue.genre}</h3>
                        <h3>Date: {venue.date}</h3>
                        <h3>${venue.price}</h3>
                    </div>
                ))
            }
        </div>
    ) : console.log('allVenues isnt defined')
}

export default AllVenues