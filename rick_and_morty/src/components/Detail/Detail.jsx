import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const Detail = () => {
  let [character, setCharacter] = useState({});
const {id}= useParams()


console.log(character)
  useEffect(() => {
    axios(
      `https://rym2.up.railway.app/api/character/${id}?key=pi-cesarlisarazo`
    ).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCharacter({});
  }, [id]);

  return( <div className="card">

    <h1>{character.name}</h1>
    <n3>{character.status}</n3>
    <h3>{character.species}</h3>
    <h3>{character?.origin?.name}</h3>
    <img src={character.image}  />
  
  </div>);
};

export default Detail;
