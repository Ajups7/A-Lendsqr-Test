const express = require("express");
const router = require("./routes");
const app = express();

app.get("/", (req, res) => {
  res.send({ status: "UP" }).status(200);
});
app.use(express.json());
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Server Running on ${process.env.PORT}`);
});

// user - id, email, name, password
// account -id, amount, currency, userId
