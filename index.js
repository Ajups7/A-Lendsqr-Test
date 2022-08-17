const express = require("express");
const router = require("./routes");
const app = express();

app.get("/", (req, res) => {
  res.send({ status: "UP" }).status(200);
});
app.use(express.json());
app.use(router);

app.listen(process.env.REST_PORT, () => {
  console.log(`Server Running on ${process.env.REST_PORT}`);
});

// user - id, email, name, password
// account -id, amount, currency, userId