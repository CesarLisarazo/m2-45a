import "./App.css";
import Nav from "./components/Nav/Nav.jsx";
import Cards from "./components/Cards/Cards.jsx";
import axios from "axios";
import React from "react";
import { Routes,Route } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
function App() {
  let [characters, setCharacters] = React.useState([]);
  const [renderedCharacterIds, setRenderedCharacterIds] = React.useState({});
  
  const onSearch = (id) => {
    if (renderedCharacterIds[id]) {
      window.alert("Este personaje ya está renderizado");
    } else {
      axios(
        `https://rym2.up.railway.app/api/character/${id}?key=pi-cesarlisarazo`
      ).then(({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
          setRenderedCharacterIds((oldIds) => ({
            ...oldIds,
            [id]: true,
          }));
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      });
    }
  };
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id != id));

    setRenderedCharacterIds((oldIds) => {
      const newIds = { ...oldIds };
      delete newIds[id];
      return newIds;
    });
  };
  const clearScreen = () => {
    setCharacters((characters = []));
  };

  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    var headTextElement = document.querySelector(".headText");
    var color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    headTextElement.style.color = color;
  });

  return (
    <div>
      <Nav onSearch={onSearch} clearScreen={clearScreen} />

      <Routes>
<Route path="/Home" element={<Cards characters={characters} onClose={onClose}/>} />
<Route path="/About" element={<About/>} />
<Route path="/Detail/:id" element ={<Detail/>} />
    
      
      </Routes>
    </div>
  );
}

export default App;
