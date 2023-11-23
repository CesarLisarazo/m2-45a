import './card.css'
import { Link } from 'react-router-dom';

let Card= ({id,name,status,species, gender,origin,image,onClose,})=> {

  return (
    <div className="card">
      <p className='charId'>{id}</p>
      <div className=' charidbackground'></div>
      <button  className="closeCard" onClick={()=>onClose(id)}>Close card</button>
      <h2 className='charName'><p>{name}</p></h2>
    <Link to ={`/Detail/${id}`}>
      <img src={image} alt={name} />
      </Link>

    </div>
  );
}
export default  Card;
