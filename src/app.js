import express from "express";
import connection from "../config/dbConnect.js";
import Conta from "../models/conta.js";

const app = express();
const connect = await connection();

app.use(express.json());

app.get("/", (request, response) => {
    response.status(200).send("NodeJS Rodando!")
});

app.get("/conta", async(request, response) => {
    const listaContas = await Conta.find();
    return response.json(listaContas);
});

app.post("/", async(request, response) => {
    const conta = new Conta({
        nome: request.body.nome,
        sobrenome: request.body.sobrenome,
        saldo: request.body.saldo
    })
    await conta.save();
    response.status(201).send(conta)
})

app.put("/conta/:id", async(request, response) => {
    const conta = await Conta.findOneAndUpdate({
        _id: request.params.id
    }, request.body, {
        new:true
    });

    if(!conta) {
        return response.status(404).json({error: "Conta não encontrada"})
    }

    response.status(200).json(conta);
});

connect.on("error", (erro) => {
    console.error("Erro ao se conectar", erro)
});

connect.once("open", () => {
    console.log("Conexão com o MongoDB foi realizada!")
});

export default app;   