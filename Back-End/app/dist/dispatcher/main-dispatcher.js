"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var mainDispatcher = express.Router();
mainDispatcher.use(express.json());
mainDispatcher.use(cors());
exports.default = mainDispatcher;
