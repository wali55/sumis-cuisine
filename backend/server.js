import recipes from "./data/recipes.js";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import recipeRoutes from "./routes/recipeRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());

connectDB();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("App is running");
});

app.use("/api/recipes", recipeRoutes);

app.listen(port, () => console.log(`App is running at port ${port}`));
