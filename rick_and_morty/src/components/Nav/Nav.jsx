import SearchBar from "../SearchBar/SearchBar";

const Nav = ({onSearch})=>{
return(
<div>

<SearchBar onSearch={onSearch}/>
<button className='showButton' onClick={()=>onSearch(Math.floor(Math.random()*826))}>Add random</button>
</div>

)

}

export default Nav;