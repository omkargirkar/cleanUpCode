const http=require('http');
const routes=require("./routes");
routes.testFunction();
const server=http.createServer(routes.handler);

server.listen(5000,()=>{
    console.log("Server is running");
})