import express from "express";
import database from "./database-service";
import { userRoute } from "./User/user-controller";

import { config } from "dotenv";

const app = express();

config();
app.use(express.json());
app.use("/api", userRoute());

database()
  .then(() => {
    console.log("Mongo Connected");
    app.listen(3000, () => {
      console.log("Chalu");
    });
  })
  .catch((err) => {
    console.log(err);
  });
