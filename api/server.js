const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const routes = require("./routes/index");
const https = require("https");
const fs = require("fs");

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("combined"));

app.use("/api", routes);

if (process.env.CODE_ENVIORNMENT === "dev") {
  app.listen(3001, () => console.log("[dev] API listening on port 3001"));
} else if (process.env.CODE_ENVIORNMENT === "prod") {
  const options = {
    key: fs.readFileSync("./privkey.pem"),
    cert: fs.readFileSync("./fullchain.pem"),
  };
  https.createServer(options, app).listen(3001);
}

module.exports = {
  app,
};
