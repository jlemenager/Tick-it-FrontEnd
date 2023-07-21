import { Link } from 'react-router-dom'
export default function Header(){

    return(
        <div className='headercont'>
            <Link to='/'><img className='logo' src="src/images/logo.png" alt="logo" /></Link>
            <h3 id='title'>Front Row</h3>
        </div>
    )
}