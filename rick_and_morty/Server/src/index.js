const http= require ('http')
const getCharById= require("./controllers/getCharById")

http.createServer((req,res)=>{
res.setHeader('Access-Control-Allow-Origin', '*');
const url= req.url
// if(url.includes("/rickandmorty/character")){
const id= url.split("/").pop()
// let characterFounded = data.find((char)=>char.id==Number(id))
// res.writeHead(200,{"content-Type":"aplication/json"});
// res.end(JSON.stringify(characterFounded))
// }

if(url.includes("/rickandmorty/character")){
    getCharById(res,id)

}
}).listen(3001,"localhost")

