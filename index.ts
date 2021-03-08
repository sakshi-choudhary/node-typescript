import express from "express";
import database from "./database-service";
import { userRoute } from "./User/user-controller";
var cors = require("cors");
import { config } from "dotenv";

const app = express();

config();
app.use(express.json());
app.use(cors());
app.use("/api", userRoute());

database()
  .then(() => {
    console.log("Mongo Connected");
    app.listen(process.env.PORT, () => {
      console.log("Chalu");
    });
  })
  .catch((err) => {
    console.log(err);
  });
