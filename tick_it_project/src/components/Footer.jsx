import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <div>
            <Link to='/'>Home</Link>
            <Link to='/venues'>Venues</Link>
            <Link to='/concerts'>Concerts</Link>
            <Link to='/sports'>Sports</Link>
        </div>
    )
}