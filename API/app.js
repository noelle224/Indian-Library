const express = require("express");
const app= express();
const dotenv= require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const libraryRoute = require("./routes/library");

app.use(
    cors({
        origin : "http://localhost:3000"
    })
)

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(console.log("Connected to the database"))
.catch((err) => console.log(err));

app.listen("5000", ()=> {
    console.log("yes BackEnd is running");
});

app.use("/API/library", libraryRoute);