import express from "express";
import https from "https";
import fs from "fs";
import path from "path";

const app = express();
const port = 443;
const __dirname = path.resolve();

app.use((req, res, next) => {
  const { headers, hostname, originalUrl } = req;
  if (/^\d+\.\d+\.\d+\.\d+$/.test(hostname)) {
    const domain = "shadowctrl.me";
    const redirectTo = `https://${domain}/`;
    return res.redirect(301, redirectTo);
  }

  next();
});

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const options = {
  key: fs.readFileSync(path.resolve(__dirname, "credentials/private.pem")),
  cert: fs.readFileSync(path.resolve(__dirname, "credentials/public.pem")),
};

https.createServer(options, app).listen(port, () => {
  console.log(`Started execution on port ${port}`);
});
