import express from "express";
const app = express();

app.get("/api/test", (req, res) => {
  res.json({ body: "test ok" });
});

const port = 4040;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
