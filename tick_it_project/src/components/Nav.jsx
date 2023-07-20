import { Link } from 'react-router-dom'

export default function Nav(){
    return(
        <nav>
            <Link to='/venues'>Venues</Link>
            <h1>|</h1>
            <Link to='/concerts'>Concerts</Link>
            <h1>|</h1>
            <Link to='/sports'>Sports</Link>
        </nav>
    )
}