import React, { useState } from 'react';
import './searchBar.css'

let SearchBar =({onSearch})=> {



const [id,setId] = React.useState("")

const handleChange= (event)=>{

   setId(event.target.value)


}

   React.useState 
   return (
      <div className="searchBar">
  
        
         
         <span className='headText'>There are 826 characters from the Rick and Morty world to discover!  </span>
    
        <div className='inputAndButton'> 
         <input value= {id} onChange={handleChange} placeholder= ' ID number' id='input'type='search' />
         <button className='showButton' onClick={()=>onSearch(id)}>Show on screen!</button> 
    
         </div>
        
      </div>
   );
}

export default SearchBar;