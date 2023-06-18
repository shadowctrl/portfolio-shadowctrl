import express from "express";
import compression from "compression";
import fs from "fs";
import path from "path";
import spdy from "spdy";
const app = express();
const port = 443;
const __dirname = path.resolve();

app.use(compression());
app.use((req, res, next) => {
  const { headers, hostname, originalUrl } = req;
  if (/^\d+\.\d+\.\d+\.\d+$/.test(hostname)) {
    const domain = "shadowctrl.me";
    const redirectTo = `https://${domain}/`;
    return res.redirect(301, redirectTo);
  }

  next();
});
const staticOptions = {
  maxAge: "1d",
};

app.use(express.static(path.join(__dirname, "dist"), staticOptions));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const options = {
  key: fs.readFileSync(path.resolve(__dirname, "credentials/private.pem")),
  cert: fs.readFileSync(path.resolve(__dirname, "credentials/public.pem")),
};

spdy.createServer(options, app).listen(port, () => {
  console.log(`Started execution on port ${port}`);
});
