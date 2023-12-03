const http = require("http");
const characters = require("./utils/data");
const getCharById = require("./controllers/getCharById");
const PORT = 3001;

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    if (req.url.includes("/rickandmorty/character")) {
    const id = req.url.split("/").pop();
      getCharById(res, id);
    } else{
      return res
      .writeHead(404, { "content-Type": "application/json" })
      .end(JSON.stringify({ message: "url not found" }));
    }
  
    })
  .listen(PORT, "127.0.0.1", 
  ()=>console.log("test"));
