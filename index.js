import express from "express";
import path from "path";
const __dirname = path.resolve();
const app = express();
const port = 443;
app.use(express.static(path.resolve(__dirname, "dist")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist/index.html"));
});

app.listen(port, () => {
  console.log(`Up and running on port: ${port}`);
});
