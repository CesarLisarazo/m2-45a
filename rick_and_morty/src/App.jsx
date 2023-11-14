import './App.css';
import Nav from "./components/Nav/Nav.jsx"
import Cards from './components/Cards/Cards.jsx';
import axios from 'axios';
import characters from './data.js';
import React from 'react';

function App() {

const [characters, setCharacters] = React.useState([])




const onSearch = (id) => {
   axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-cesarlisarazo`)
     .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data])
         } else {
            window.alert('There is no character with this ID number')
         }
      }
   )
}


const onClose= (id)=>{
   
setCharacters( characters.filter((char)=>char.id!= id   )  )

}



 return(
   <div>
     <Nav onSearch={onSearch} />
     <Cards characters={characters} onClose={onClose} />

   </div>
 )
}





  

export default App;
