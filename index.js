const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("app is live.........");
});

app.listen(3000, () => console.log("app is live on 3000"));
