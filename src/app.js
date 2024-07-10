import express from "express";
import connection from "../config/dbConnect.js";

const app = express();
const connect = await connection();

app.get("/", (res) => {
    res.status(200).send("NodeJS Rodando!")
});

connect.on("error", (erro) =>{
    console.error("Erro ao se conectar", erro)
});

connect.once("open", () =>{
    console.log("Conexão com o MongoDB foi realizada!")
})

export default app;   