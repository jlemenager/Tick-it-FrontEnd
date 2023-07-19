import { Link } from 'react-router-dom'

export default function Nav(){
    return(
        <nav>
            <Link to='/'><div><img src="https://images.pexels.com/photos/391535/pexels-photo-391535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="venues" /><h3>Venues</h3></div></Link>
            {/* <Link to='/concerts'><div><img src="https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="concerts" /><h3>Concerts</h3></div></Link> */}
            <Link to='/sports'><div><img src="https://images.pexels.com/photos/17071576/pexels-photo-17071576/free-photo-of-soccer-fans-in-the-stadium.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="sports" /><h3>Sports</h3></div></Link>
        </nav>
    )
}