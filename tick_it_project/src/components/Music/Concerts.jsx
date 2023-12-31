import { useEffect, useState, useContext } from "react"
// import UserContext from "../../UserContext"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const AllConcerts = ({ allConcerts, setAllConcerts }) => {
    
    
    const getConcertsAPI = async() => {
        const response = await axios.get('https://tick-itapi-production.up.railway.app/events')
        const concerts = []
        for (let i = 0; i<response.data.length;i++){
          response.data[i].is_concert ? concerts.push(response.data[i]) : console.log('not a concert')
        } 
        setAllConcerts(concerts)
        console.log(allConcerts)
      }
      
    useEffect(()=>{
        getConcertsAPI()
      },[])

    let navigate = useNavigate()

    const pickConcert = (title) => {
        navigate(`${title}`)
    }

    return allConcerts ? (
        <div className="event-list">
            {/* <h2>Concerts:</h2> */}
            {
                allConcerts.map((concert,key) => (
                    <div key={key} onClick={()=>pickConcert(concert.title)} className="concertl">
                        <h2>Title: {concert.title}</h2>
                        <h2>Artist: {concert.artist}</h2>
                    </div>
                ))
            }
        </div>
    ) : console.log('allConcerts isnt defined')
}

export default AllConcerts