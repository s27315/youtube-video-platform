import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        VideoTube
      </Link>

      <SearchBar />
    </nav>
  );
};

export default Navbar;