const express = require("express");
const { Response, NextFunction } = require("express");
const app = express();

app.get("/api/test", (req, res) => {
  res.json({ body: "test ok" }); // Corrected the syntax for response JSON
});

const port = 4040; // Corrected the syntax for defining port
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
