import React, { useState } from 'react';
import './searchBar.css'

const SearchBar =({onSearch,clearScreen})=> {



const [id,setId] = React.useState("")

const handleChange= (event)=>{

   setId(event.target.value)


}

   React.useState 
   return (
      <div className="searchBar">
  
        
         
         <span className='headText'>There are 826 characters from the Rick and Morty world to discover!  </span>
    
        <div className='inputAndButton'> 
         <input autoComplete="off" value= {id} onChange={handleChange} placeholder= ' ID number' id='input'type='search' />
         <button className='showButton' onClick={()=>onSearch(id)}>Show on screen!</button> 
         <button className='showButton' onClick={()=>onSearch(Math.ceil(Math.random()*826))}>Add random</button>
         <button className='showButton' onClick={()=>clearScreen()}>Clear screen</button>
         </div>
        
      </div>
   );
}

export default SearchBar;