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
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(addFav({ id, name, image, onClose, gender }));
    }
  };

  return (
    <div className="card">
      {isFav ? (
        <button className="heartFav" onClick={handleFavorite}>
          <div className="star">⭐</div>{" "}
        </button>
      ) : (
        <button className="heartFav " onClick={handleFavorite}>
          <div className="star">☆</div>
        </button>
      )}

      <p className="charId">{id}</p>

      <div className=" charidbackground"></div>
      <button className="closeCard" onClick={() => onClose(id)}>
        Close card
      </button>
      <h2 className="charName">
        <p>{name}</p>
      </h2>
      <Link to={`/Detail/${id}`}>
        <img src={image} alt={name} />
      </Link>
    </div>
  );
};
export default Card;
