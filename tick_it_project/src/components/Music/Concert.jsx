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
            <div className='concdetail'>
                <h1>{concert.title}</h1>
                <div id='artist'>
                    <h3>Artist:</h3> <h3>{concert.artist}</h3>
                </div>
                <div id='genre'>
                    <h3>Genre:</h3> <h3>{concert.genre}</h3>
                </div>
                <div id='cdate'>
                    <p>Performing on:</p> <p>{concert.date}</p>
                </div>
                <div className='tixprice'>
                    <p>${concert.price}</p>
                    <p><span className='tixquant'>{concert.tickets}</span> tickets left</p>
                </div>
            </div> 
        <div className='gettix'>
            <button className='tixbtn' onClick={minus}>-</button>
            <p>{buyTickets}</p>
            <button className='tixbtn' onClick={() => setBuyTickets((buyTickets) => buyTickets + 1)}>+</button>
        </div>
            <submit>Claim Tickets</submit>
        </div> 
    )
}

export default Concert