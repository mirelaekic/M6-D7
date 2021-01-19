const express = require("express");
const server = express();
const cors = require("cors");
const services = require("./services/index.js");

server.use(express.json());
server.use("/",services);
server.use(cors());

const port = process.env.PORT || 5000;

server.listen(port,()=>{
    console.info("Server is running on port " + port)
});
server.on("error",(error) => {
    console.error("Error: " + error)
});