import './about.css'
import { Link } from 'react-router-dom';
const About= ()=>{
return (
<div className="aboutContainer">
<div className="card aboutCard">
     
   <Link to="/">
      <img src="https://i.imgur.com/tHlRZxO.jpg" alt={name} />
      </Link>
      <h2 ><p>Name : Cesar</p></h2>
      <h2>Status : Alive</h2>
      <h2>Species : Humanoid</h2>
      <h2>Gender : Male</h2>
      <h2>Origin : Earth</h2>
    </div>
</div>

)
}

export default About;