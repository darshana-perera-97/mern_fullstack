const express = require("express");
const { default: mongoose } = require("mongoose");
const UserModel = require("./models/Users");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors())

mongoose.connect(
  "mongodb+srv://darshana:darshana@cluster0.b4ir7g9.mongodb.net/merntutorial?retryWrites=true&w=majority"
);

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

app.listen(3001, () => {
  console.log("Server runs in 3001");
});
