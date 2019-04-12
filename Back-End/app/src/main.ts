import express = require("express");
import axios = require("axios");
const bodyParser = require('body-parser');
const session = require('express-session');


import mainDespatcher from "./dispatcher/main-dispatcher";

const app = express();

app.use(mainDespatcher);

app.listen(3020, () => console.log("Server is listening at 3002"));
