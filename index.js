const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users");
const { errorHandler } = require("./middleware/errorMiddleware");
// const connectDB = require("./config/db");
// const colors = require("colors");

// connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/todos", require("./routes/todoRoutes"));
app.use("/api/users", require("./routes/authRoutes"));

app.use(errorHandler);
// app.get("/get-todos", (req, res) => {
//   res.json({ message: "get goalss" });
// });

app.get("/users", (req, res) => {
  UserModel.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate(
    { _id: id },
    {
      email: req.body.email,
      name: req.body.name,
    }
  )
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.post("/createUser", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("server is running");
});

// mongoose.connect("mongodb://127.0.0.1:27017/crud");
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
