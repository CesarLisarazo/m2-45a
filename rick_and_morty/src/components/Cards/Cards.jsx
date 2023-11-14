import "./cards.css";
import Card from "../Card/Card";
let Cards = ({ characters,onClose }) => {
  return (
    <div className="cards">
      {characters.map((char, index) => {
        return <Card id={char.id} key={index} name={char.name} image={char.image} onClose={onClose} />;
      })}
    </div>
  );
};

export default Cards;
