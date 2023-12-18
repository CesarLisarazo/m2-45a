import "./nav.css";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
const Nav = ({ onSearch, clearScreen, logout }) => {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className="navContainer">
      <SearchBar onSearch={onSearch} clearScreen={clearScreen} />
      <div className="headTextContainer">
        <div className="navBarButtons">
        
        <a href="https://check.so" class="btn-shine" target="_blank">There are 826 characters from the Rick and Morty world to discover!</a>
        <div className="inputAndButton">
            <input
              autoComplete="off"
              value={id}
              onChange={handleChange}
              placeholder=" Enter ID "
              id="input"
              type="search"
            />
                <Link to="Home">
              <button className="showButton" onClick={() => onSearch(id)}>
                Show on screen
              </button>
            </Link>


             
            <Link to="Home">
              <button
                className="showButton"
                onClick={() => onSearch(Math.ceil(Math.random() * 826))}
              >
            
                Add random
              </button>
            </Link>
          <Link to="About">
            <button className="showButton">About</button>
          </Link>

          <Link to="Home">
            <button className="showButton">Home</button>
          </Link>

          <Link to="Home">
            <button className="showButton" onClick={() => clearScreen()}>
              Clear screen
            </button>
          </Link>

          <Link to="Favorites">
            <button className="showButton">Favorites</button>
          </Link>

          <button className="showButton" onClick={logout}>
            Logout
          </button>

        

       
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
