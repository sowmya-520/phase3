import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../Login/LoginSlice";
import { useSelector } from "react-redux";
import './DashBoardNav.css';
const DashBoardNav = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logoutUser());
    window.alert("you are logging out!");
    navigate("/");
  };
  return (
    <div className="header-box">
      <div>
        <h1>RENT FURLAX</h1>
      </div>
      <div className="options">
        <ul>
          <Link to={"/"}>Home</Link>
          <Link to={"/orders"}>Orders</Link>
          <Link to={"/cart"}>Cart</Link>
          {isAuthenticated && <button onClick={logoutHandler}>Logout</button>}
        </ul>
      </div>
    </div>
  );
};
export default DashBoardNav;
