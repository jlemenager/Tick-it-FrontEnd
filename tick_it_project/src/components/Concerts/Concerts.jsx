import { useEffect, useState, useContext } from "react"
import UserContext from "../../UserContext"
import axios from "axios"

const Concerts = () => {
    
    // const {allConcerts, setAllConcerts} = useContext(UserContext)

    // useEffect(() => {
    //     const getConcerts = async() => {
    //         const response = await axios.get()
    //         setAllConcerts()
    //         console.log(response)
    //     }
    //     getConcerts()
    // },[])

    return (
        <div className="concerts">

            <h2>Concerts</h2>

        </div>
    )

}

export default Concerts