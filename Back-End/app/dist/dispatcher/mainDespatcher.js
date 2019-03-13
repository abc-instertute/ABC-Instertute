"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var mainDespatcher = express.Router();
mainDespatcher.use(express.json());
mainDespatcher.use(cors());
exports.default = mainDespatcher;
