import express = require("express");
import cors = require("cors");

const mainDispatcher = express.Router();
mainDispatcher.use(express.json());
mainDispatcher.use(cors());


export default mainDispatcher;
