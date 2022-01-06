import express from "express";
import env from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import morgan from "morgan";
import route from "./route/index.js";
import cors from "cors";

env.config();

const port = process.env.PORT || 3000;

const app = express();

mongoose
  .connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DB Connected!"))
  .catch((err) => {
    console.log(`DB Connection Error: ${err.message}`);
  });
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api", route);

app.listen(port, function () {
  console.log(`listening to port ${port}...`);
});

export default app;
