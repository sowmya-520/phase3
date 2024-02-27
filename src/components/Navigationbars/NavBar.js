import { Link } from "react-router-dom";
import './NavBar.css';
const NavBar=()=>
{
    return(
        <div className='header-box'>
        <div><h1>RENT FURLAX</h1></div>
        <div className='options'>
            <ul>
                <Link to={"/login"}>Login</Link>
                <Link to={"/register"}>Register</Link>
            </ul>
        </div>
    </div>
    );
}
export default NavBar;