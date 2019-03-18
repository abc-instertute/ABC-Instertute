import express = require("express");
import axios = require("axios");

import mainDespatcher from "./dispatcher/main-dispatcher";

const app = express();

app.use(mainDespatcher);

app.listen(3020, () => console.log("Server is listening at 3002"));
