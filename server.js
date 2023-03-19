const express = require("express");
const cors = require("cors");
const bodyParser=require('body-parser');
const { default: initAPIRoute } = require("./src/route/api");
const app = express();

require("dotenv").config();
const port = process.env.PORT;

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json())

initAPIRoute(app)

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });
