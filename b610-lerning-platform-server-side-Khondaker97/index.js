const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const data = require("./data.json");

dotenv.config();
const app = express();
//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// testing
app.get("/", (req, res) => {
  res.status(200).send("This is about courses api.");
});
//route
app.get("/api/courses/", async (req, res) => {
  try {
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
});
app.get("/api/courses/:id", async (req, res) => {
  const id = req.params.id;
  try {
    if (id === "all") {
      res.status(200).json(data);
      return;
    }
    const sub = data.result.find((sub) => sub.id === id);
    if (!sub) {
      res.status(404).send({ msg: "NOT FOUND!" });
      return;
    }
    res.status(200).json(sub);
  } catch (error) {
    console.log(error);
  }
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log("server is running!"));
