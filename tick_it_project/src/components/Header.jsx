import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/concerts'>Concerts</Link>
            <Link to='/sports'>Sports</Link>
        </nav>
    )
}