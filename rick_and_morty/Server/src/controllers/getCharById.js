const axios = require("axios");
const URL= "https://rym2.up.railway.app/api/character"
const apiKey = "henrystaff";
 
const getCharById = (res, id) => {
  axios.get(`https://rym2.up.railway.app/api/character/${id}?key=pi-cesarlisarazo`)

    .then((response) => response.data)
    .then((data) => {

      const character = {
        id: data.id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin,
        image: data.image,
        status: data.status,
        location: data.location,
      }
      console.log(character);
      return res
      .writeHead(200,{ "Content-Type":"application/json" })
      .end(JSON.stringify(character))
     

    })

    .catch(() => {
      res
      .writeHead(500,{ "Content-Type": "text/plain" })
      .end("No entiendes la onda")
      
      })
     
};

module.exports = getCharById;

