const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users");
const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/todos", require("./routes/todoRoutes"));
app.use("/api/users", require("./routes/authRoutes"));

app.use(errorHandler);

app.listen(3001, () => {
  console.log("server is running");
});

////////////////////////need to be replace with .env file//////////////
mongoose
  .connect(
    "mongodb+srv://maryam:Dreams2326@cluster0.vhvuf6a.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connectttted");
  })
  .catch((err) => {
    console.log("not con");
  });
