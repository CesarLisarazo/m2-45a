const axios = require("axios");

const getCharById = (res, id) => {
  axios(
    `https://rym2.up.railway.app/api/character/${id}?key=pi-cesarlisarazo`
  ).then(({ data }) => {
    const character = {
      id: data.id,
      name: data.name,
      gender: data.gender,
      species: data.species,
      origin: data.origin?.name,
      image: data.image,
      status: data.status,
    };
    res.writeHead(200,{ "Content-Type": "aplication/json" }
    .end(JSON.stringify(character))
    );
  })

  .catch(
    res.writeHead(500,{ "Content-Type": "text/plain" })
    .end(error.message)
  )



};

module.exports= {
    getCharById
}