"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Login_bo_impl_1 = require("../business/Login-bo-impl");
var loginDispatcher = express.Router();
loginDispatcher.route("/log_session")
    .post(function (req, res) {
    if (!("id" in req.body && "email" in req.body)) {
        res.status(400).send("Invalid Request Body");
        return;
    }
    var promise = new Login_bo_impl_1.LoginBoImpl().saveLogin(req.body);
    promise.then(function (status) { return res.status(201).json(status); })
        .catch(function (err) { return res.status(500).send(err); });
})
    .delete(function (req, res) {
    var promise = new Login_bo_impl_1.LoginBoImpl().deleteLogin(req.params.email);
    promise.then(function (status) {
        if (status) {
            res.status(200).send(true);
        }
        else {
            res.sendStatus(404);
        }
    }).catch(function (error) {
        res.status(500).send(error);
    });
});
exports.default = loginDispatcher;
