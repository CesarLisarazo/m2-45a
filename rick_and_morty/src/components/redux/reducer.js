import { ADD_FAV, REMOVE_FAV } from "./actions-types";

let initialState = {
  myFavorites: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };

    case REMOVE_FAV:
      const filteredCharacters = state.myFavorites.filter(
        (favorite) => favorite.id !== Number(action.payload)
      );
      return {
        ...state,
        myFavorites: filteredCharacters,
      };

    default:
        return{...state}
  }
}
