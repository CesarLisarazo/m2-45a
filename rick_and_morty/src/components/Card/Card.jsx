import './card.css'
import { Link } from 'react-router-dom';

let Card= ({id,name,status,species, gender,origin,image,onClose,})=> {

  return (
    <div className="card">
      <button  className="closeCard" onClick={()=>onClose(id)}>Close card</button>
    <Link to ={`/Detail/${id}`}>
      <h2 className='charName'><p>{name}</p></h2>
      <img src={image} alt={name} />
      </Link>
      <h2>{status}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{origin}</h2>
    </div>
  );
}
export default  Card;
