import mongoose, {mongo} from "mongoose";

const contaSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, required: true},
    sobrenome: {type: String, required: true},
    saldo: {type: Number, required: true}
}, {versionKey: false});

export default mongoose.model("Conta", contaSchema);
