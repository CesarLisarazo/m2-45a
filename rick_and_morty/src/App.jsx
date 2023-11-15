import "./App.css";
import Nav from "./components/Nav/Nav.jsx";
import Cards from "./components/Cards/Cards.jsx";
import axios from "axios";
import React from "react";

function App() {
  let [characters, setCharacters] = React.useState([]);

  // const onSearch = (id) => {
  //   axios(
  //     `https://rym2.up.railway.app/api/character/${id}?key=pi-cesarlisarazo`
  //   ).then(({ data }) => {
  //     if (data.name) {
        
  //       if (!characters.some((character) => character.id == data.id)) {

  //         setCharacters((oldChars) => [...oldChars, data]);
  //       } else {
  //         alert("This character is already on display");
  //       }
  //     } else {
  //       alert("There is no character with this ID number");
  //     }
  //   });
  // };
  const onSearch = (id) => { 
    axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-cesarlisarazo`)
    .then(
    ({ data }) => {
       if (data.name) {
          if (characters.some((character) => character.id === data.id)) {
             setCharacters((oldChars) => [data, ...oldChars]);
           } else {
             window.alert("¡Ya existe un personaje con este ID!");
           }
         } else {
           window.alert("¡No hay personajes con este ID!");
         }
       });
     }


  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id != id));
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
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
