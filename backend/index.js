import express from "express";
import peopleRoutes from "./routes/peopleRoutes.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/", peopleRoutes);
app.listen(8800);