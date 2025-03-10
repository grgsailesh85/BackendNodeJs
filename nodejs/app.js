// HTTP module - create server
// npm install -D nodemon

import http from "http"

// Request - user sends / request to server
// Response - Server sends to user
const app = http.createServer(function (request, response){
    response.end("This is response from server");
})

app.listen(5000, ()=>{
    console.log("Server is runnning at port 5000...")
})
