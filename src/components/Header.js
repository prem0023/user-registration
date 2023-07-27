import logo from "../utils/logo.jpg";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <Link to="/">
      <img
        className="h-20 mx-5 my-2 rounded-md hover:drop-shadow-lg"
        src={logo}
        alt="logo"
      ></img>
    </Link>
  );
};

const Header = () => {
  return (
    <div className="flex justify-between bg-gray-100 drop-shadow-lg mb-20">
      <Title />
      <ul className="flex items-center gap-5 pr-10 ">
        <li className="px-5 py-2 rounded-lg text-white font-bold bg-green-400 hover:font-bold">
          <Link to={"/login"}>Login</Link>
        </li>

        <li className="px-5 py-2 rounded-lg text-white font-bold bg-blue-400 hover:font-bold">
          <Link to={"/"}>Register</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
