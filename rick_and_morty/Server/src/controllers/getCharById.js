
const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

const getCharById = (req, res) => {
  const { id } = req.params;
  axios.get(`${URL}/${id}`)
  .then(({ data }) => {
    const character = {
      id: data.id,
      status: data.status,
      name: data.name,
      species: data.species,
      origin: data.origin,
      image: data.image,
      gender: data.gender,
      location: data.location,
    };
    return character.name
    ?res.json(character)
    :res.status(404).send("Not found")
  })
  .catch((error)=>{
    return res.status(500).send(error.message)

  })


};

module.exports = getCharById;
