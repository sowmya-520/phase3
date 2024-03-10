import NavBar from "../Navigationbars/NavBar";
import DashBoardNav from "../Navigationbars/DashBoardNav";
import { useSelector } from "react-redux";
import CategoryHomePage from "../Categories/CategoryHomePage";
export default function HomePage() {
  const isLoggedIn = useSelector((state) => state.auth.user);
  return (
    <div>
      {isLoggedIn ? <DashBoardNav /> : <NavBar/>}
      <CategoryHomePage/>
    </div>
  );
}
