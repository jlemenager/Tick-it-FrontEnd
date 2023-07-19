import { Link } from 'react-router-dom'

export default function Nav(){
    return(
        <nav>
            <Link to='/'>Venues</Link>
            <Link to='/concerts'>Concerts</Link>
            <Link to='/sports'>Sports</Link>
        </nav>
    )
}