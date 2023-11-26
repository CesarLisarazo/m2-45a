import "./favorites.css";
import { useSelector } from "react-redux";
import Card from "../Card/Card";

const Favorites = () => {
  const myFavorites = useSelector((state) => state.myFavorites);

  return (
    <div className="favoritesContainer">
      {myFavorites.map((fav) => {
        return (
          <Card key={fav.id} id={fav.id} name={fav.name} image={fav.image} />
        );
      })}
    </div>
  );
};

export default Favorites;
