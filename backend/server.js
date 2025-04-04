const express = require("express");
const {connectDB} = require("./config/db.js");
const UserRoutes = require("./routes/blogRoutes.js")
const cors = require("cors");

connectDB();

const app = express();

const options= {
    origin: "*",
    }
     
app.use(cors(options));

app.use(express.json());

app.use("/blog",UserRoutes);

app.listen(5000, ()=>{
    console.log("Listening at port 5000...");
})

