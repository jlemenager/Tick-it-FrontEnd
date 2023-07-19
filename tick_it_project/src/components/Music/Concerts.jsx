import { useEffect, useState, useContext } from "react"
import UserContext from "../../UserContext"
import axios from "axios"

const AllConcerts = () => {
    
    // const {allConcerts, setAllConcerts} = useContext(UserContext)

    // useEffect(() => {
    //     const getConcerts = async() => {
    //         const response = await axios.get()
    //         setAllConcerts(response.data.title)
    //         console.log(response)
    //     }
    //     getConcerts()
    // },[])

    return (
        <div className="all-concerts">
            <h2>Concerts:</h2>
            {
                concerts.map((concert,key) => (
                    <div key={key} className="concert-title">
                        <h3>{concert.title}</h3>
                    </div>
                ))
            }

        </div>
    )

}

export default Concerts