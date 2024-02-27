import { Link } from "react-router-dom";

const CartNavigationBar=()=>
{
    return(
        <div className='header-box'>
        <div><h1>RENT FURLAX</h1></div>
        <div className='options'>
            <ul>
                <Link to={"/dashboard"}>dashboard</Link>
            </ul>
        </div>
    </div>
    );
}
export default CartNavigationBar;