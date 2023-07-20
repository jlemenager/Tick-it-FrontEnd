import { useEffect, useState, useContext } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const Concert = ({ allConcerts }) => {

    const [concert, setConcert] = useState('')

    let {title} = useParams()

    useEffect(()=>{
        let selectedConcert = allConcerts.find(concert=>concert.title == title)           
            setConcert(selectedConcert)
        },[concert.title, title])

    return (
        <div className='concert'>
        <h1>{concert.title}</h1>
        <h2>{concert.artist}</h2>
        <h3>{concert.genre}</h3>
        <p>Performing on: {concert.date}</p>
        <p>${concert.price}</p>
    </div> 
    )
}

export default Concert