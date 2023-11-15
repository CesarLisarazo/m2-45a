import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
const Nav = ({ onSearch, clearScreen }) => {
  return (
    <div >

      <SearchBar onSearch={onSearch} clearScreen={clearScreen} />
<div className="navBarButtons">
     <Link to ="About">
      <button className="showButton">About</button>
      </Link>

      <Link to="Home">
      <button className="showButton">Home</button>
      </Link>
   
      

      </div>    
    </div>
  );
};

export default Nav;
