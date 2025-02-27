// app.js
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello, world!" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;