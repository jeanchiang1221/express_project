const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const dbString = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PWD
);

//連接到資料庫
mongoose
  .connect(dbString)
  .then(() => {
    console.log("connect to DB successfully");
  })
  .catch((error) => {
    console.log(error);
  });
