import { useEffect, useState, useContext } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const Concert = ({ allConcerts }) => {

    const [concert, setConcert] = useState('')
    const [buyTickets, setBuyTickets] = useState(0)

    const minus = () => {
        if(buyTickets <= 0) {
            return
        } else {
            setBuyTickets(buyTickets - 1)
        }
    }

    let {title} = useParams()

    useEffect(()=>{
        let selectedConcert = allConcerts.find(concert=>concert.title == title)           
            setConcert(selectedConcert)
        },[concert.title, title])

    return (
        <div className='concert'>
        <h1>Title:{concert.title}</h1>
        <h2>Artist:{concert.artist}</h2>
        <h3>Genre:{concert.genre}</h3>
        <p>Performing on: {concert.date}</p>
        <p>${concert.price}</p>
        <p>Tickets: {concert.tickets}</p>
        <div className='get-tickets'>
        <button onClick={minus}>-</button>
        <p>{buyTickets}</p>
        <button onClick={() => setBuyTickets((buyTickets) => buyTickets + 1)}>+</button>
        </div>
        <submit>Claim Tickets</submit>
    </div> 
    )
}

export default Concert