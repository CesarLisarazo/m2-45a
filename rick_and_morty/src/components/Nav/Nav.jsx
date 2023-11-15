import SearchBar from "../SearchBar/SearchBar";

const Nav = ({onSearch,clearScreen})=>{
return(
<div>

<SearchBar onSearch={onSearch} clearScreen={clearScreen}/>

</div>

)

}

export default Nav;