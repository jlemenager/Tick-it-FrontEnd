import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


export default function Sport({ allSports, tickets, setTickets }){
    let [personalTickets,setPersonalTickets] = useState(0)
    const [sport, setSport] = useState({})

    let { title } = useParams()
    
    useEffect(()=>{
       let selectedSport = allSports.find(sport=>sport.title == title)
       setSport(selectedSport)
       setTickets(selectedSport.tickets)
    },[sport.title, title])

    const decreasePersonalTickets = () => {
        if (personalTickets <= 0){
            return
        } else {
            setPersonalTickets(personalTickets - 1)
        }
    }

    const handleSubmit = async() => {
        setTickets(tickets - personalTickets)
        console.log('working')
        const response = await axios.get(`https://tick-itapi-production.up.railway.app/events/`)
                console.log('working2')
                const response2 = await axios.put(`https://tick-itapi-production.up.railway.app/events/${sport.id}`, {...sport, tickets: sport.tickets - personalTickets})
                console.log(response2)  
        }
        localStorage.setItem('tickets', tickets - personalTickets)

    // setTickets()
    return(
        <div className='sportPage'>
            <h1>{sport.title}</h1>
            <h2>{sport.artist}</h2>
            {/* <h3>{sport.venue}</h3> */}
            {/* <img src={sport.image_url} alt="sport image" /> */}
            <p>{sport.date}</p>
            <p>{sport.price}</p>
            <p>{sport.tickets - personalTickets}</p>
            <h2>Claim Tickets</h2>
            <button onClick={()=>setPersonalTickets(personalTickets=>personalTickets + 1)}>+</button>
            <p className='personal-tickets'>{personalTickets}</p>
            <button onClick={decreasePersonalTickets}>-</button>
            <button onClick={handleSubmit}>Claim Tickets</button>
        </div>
    )
}
