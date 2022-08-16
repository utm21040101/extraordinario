const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("colors");
require("./config/config");
const app = express();
const routes  = require("./routes/index");
const { response, request } = require("./routes/index");


app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json());
 

app.use("/api",routes);
app.get("/",(request, response)=>{
    return response.status(200).json({
        msg : "Estas dentro de las api de Arrioja ",
        status: 200
    })
})



mongoose.connect(process.env.URLDB,{})
.then(() => {
    console.log("[MONGOOB]".green + "DATABASE CONECTION SUCCESSFULLY");
})
.catch((err) => {
    console.log("[MONGOOB]".red + "DATABASE CONECTION FAILED" + err);
});


app.listen(process.env.PORT,()=> {
    console.log("Se esta escuchando en el puerto ".azul +  process.env.PORT.green)
});