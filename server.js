import express from "express"
import dotenv from "dotenv";

import morgan from "morgan";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoute.js"

//config env
dotenv.config();

//config dev
connectDB();

//rest object
const app = express();

//middleware
app.use(express.json())
app.use(morgan("dev"));

// routes
app.use("/api/v1/auth",authRoutes)


app.get("/", (req, res) => {
    res.send("Hello World!");
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT );
});

