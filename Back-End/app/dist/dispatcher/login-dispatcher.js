"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Login_bo_impl_1 = require("../business/Login-bo-impl");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var morgan = require("morgan");
var uuid = require("uuid/v4");
var loginDispatcher = express.Router();
loginDispatcher.use(morgan('dev'));
loginDispatcher.use(bodyParser.urlencoded({ extended: true }));
loginDispatcher.use(cookieParser());
exports.fruits = [];
loginDispatcher.route("/login/:email")
    .get(function (req, res) {
    var promise = new Login_bo_impl_1.LoginBoImpl().findAllLogin();
    promise.then(function (assigment) {
        res.status(200).json(assigment);
    }).catch(function (error) {
        res.status(500).send(error);
    });
})
    .post(function (req, res) {
    if (!("email" in req.body && "password" in req.body && "position" in req.body)) {
        res.status(400).send("Invalid Request Body");
        return;
    }
    var promise = new Login_bo_impl_1.LoginBoImpl().saveLogin(req.body);
    promise.then(function (status) { return res.status(201).json(status); })
        .catch(function (err) { return res.status(500).send(err); });
});
loginDispatcher.route("/login")
    .get(function (req, res) {
    var promise = new Login_bo_impl_1.LoginBoImpl().findLogin(req.params.email);
    promise.then(function (assigement) {
        if (assigement.length > 0) {
            res.status(200).send(assigement[0]);
        }
        else {
            res.sendStatus(404);
        }
    }).catch(function (error) {
        res.status(500).send(error);
    });
})
    .post(function (req, res) {
    exports.fruits = [];
    res.status(200).json(exports.fruits);
});
loginDispatcher.route("")
    .post(function (req, res) {
    if (!("email" in req.body && "password" in req.body && "position" in req.body)) {
        res.status(400).send("Invalid Request Body");
        return;
    }
    var promise = new Login_bo_impl_1.LoginBoImpl().loginValidation(req.body);
    console.log(req.body);
    promise.then(function (assigement) {
        console.log(assigement);
        if (assigement.length == 1) {
            var uniqueId = uuid();
            var email = assigement[0].email;
            var position = assigement[0].position;
            exports.fruits = [uniqueId, email, position];
            console.log(exports.fruits);
            res.status(200).json(exports.fruits);
        }
        else {
            res.sendStatus(404);
        }
    }).catch(function (error) {
        res.status(500).send(error);
    });
})
    .put(function (req, res) {
    if (!("email" in req.body && "password" in req.body && "position" in req.body)) {
        res.status(400).send("Invalid Request Body");
        return;
    }
    if (req.body.email !== req.params.email) {
        res.status(400).send("Mismatched assigment ID");
        return;
    }
    var promise = new Login_bo_impl_1.LoginBoImpl().updateLogin(req.body);
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
})
    .get(function (req, res) {
    res.status(200).json(exports.fruits);
});
exports.default = loginDispatcher;
