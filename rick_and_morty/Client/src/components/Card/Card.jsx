import "./card.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../redux/actions";

const Card = ({ id, name, image, onClose, gender }) => {
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);
  const myFavorites = useSelector((state) => state.myFavorites);

  useEffect(() => {
    setIsFav(false);
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, id]);


  // useEffect(() => {
  //   myFavorites.forEach((fav) => {
  //     if (fav.id === id) {
  //       setIsFav(true);
  //     }

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(addFav({ id, name, image, onClose, gender }));
    }
  };

  return (<div className=" cardContainer">
    <div className="card">
      {isFav ? (
        <button className="heartFav" onClick={handleFavorite}>
          🧡
        </button>
      ) : (
        <button className="heartFav" onClick={handleFavorite}>
          🤍
        </button>
      )}
      <p className="charName">
        <p>{name}</p>
      </p>
      <p className="charId">{id}</p>
      <div className=" charidbackground"></div>
      <button className="closeCard" onClick={() => {onClose(id) }}>Close</button>
      <Link to={`/Detail/${id}`}>
        <div className="frameContainer"></div>
        <div className="imgContainer"><img src={image} alt={name} /></div>
      </Link>
    </div>
    </div>
  );
};

export default Card;




