"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var log_session_bo_impl_1 = require("../business/log_session-bo-impl");
var Log_sessionDispatcher = express.Router();
Log_sessionDispatcher.route("")
    .post(function (req, res) {
    if (!("id" in req.body && "email" in req.body)) {
        res.status(400).send("Invalid Request Body");
        return;
    }
    var promise = new log_session_bo_impl_1.LoginBoImpl().saveLogin(req.body);
    promise.then(function (status) { return res.status(201).json(status); })
        .catch(function (err) { return res.status(500).send(err); });
})
    .get(function (req, res) {
    var promise = new log_session_bo_impl_1.LoginBoImpl().findAllLog_session();
    promise.then(function (assigment) {
        res.status(200).json(assigment);
    }).catch(function (error) {
        res.status(500).send(error);
    });
});
Log_sessionDispatcher.route("/:email")
    .delete(function (req, res) {
    var promise = new log_session_bo_impl_1.LoginBoImpl().deleteLogin(req.params.email);
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
exports.default = Log_sessionDispatcher;
