import mongoose, {mongo} from "mongoose";

async function connection() {
    mongoose.connect("mongodb://localhost:27017/banco");
    return mongoose.connection;
}

export default connection;