import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv/config";
import registreRoutes from "./routes/registreRoutes.js";
import loginRoutes from "./routes/loginRoutes.js"
import dbConnect from "./utils/dbConnection.js"

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use("/api",registreRoutes);
app.use("/api",loginRoutes);

app.listen(7000, (req,res) => {
    dbConnect();
    console.log("Server is running on localhost:7000")
})