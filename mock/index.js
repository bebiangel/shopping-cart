const express = require("express");
const app = express();
const port = 4009;

app.use("/");
app.listen(port, () =>
  console.log(`Shopping-cart Mock server listening onp port ${port}`)
);
