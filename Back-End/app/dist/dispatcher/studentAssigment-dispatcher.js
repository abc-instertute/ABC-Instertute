"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var studentAssigment_bo_impl_1 = require("../business/studentAssigment-bo-impl");
var cors = require("cors");
var studentAssigmentDispatcher = express.Router();
studentAssigmentDispatcher.route("")
    .get(function (req, res) {
    var promise = new studentAssigment_bo_impl_1.StudentAssigmentBoImpl().findAllAssigment();
    promise.then(function (assigment) {
        res.status(200).json(assigment);
    }).catch(function (error) {
        res.status(500).send(error);
    });
})
    .post(function (req, res) {
    if (!("aid" in req.body && "systemDate" in req.body && "sid" in req.body && "sname" in req.body && "cid" in req.body && "file_upload" in req.body)) {
        res.status(400).send("Invalid Request Body");
        return;
    }
    var promise = new studentAssigment_bo_impl_1.StudentAssigmentBoImpl().saveAssigment(req.body);
    promise.then(function (status) { return res.status(201).json(status); })
        .catch(function (err) { return res.status(500).send(err); });
})
    .head((cors({
    exposedHeaders: ['X-Count']
})), function (req, res) {
    var t1 = new Date().valueOf(); // time stamp
    var promise = new studentAssigment_bo_impl_1.StudentAssigmentBoImpl().AssigmentCount();
    promise.then(function (count) {
        res.append("X-Count", count + "");
        res.sendStatus(200);
    }).catch(function (error) {
        res.status(500);
    });
});
studentAssigmentDispatcher.route("/:id")
    .get(function (req, res) {
    var promise = new studentAssigment_bo_impl_1.StudentAssigmentBoImpl().findAssigment(req.params.id);
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
    .delete(function (req, res) {
    var promise = new studentAssigment_bo_impl_1.StudentAssigmentBoImpl().deleteAssigment(req.params.id);
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
    .put(function (req, res) {
    if (!("aid" in req.body && "systemDate" in req.body && "sid" in req.body && "sname" in req.body && "cid" in req.body && "file_upload" in req.body)) {
        res.status(400).send("Invalid Request Body");
        return;
    }
    if (req.body.id !== req.params.id) {
        res.status(400).send("Mismatched assigment ID");
        return;
    }
    var promise = new studentAssigment_bo_impl_1.StudentAssigmentBoImpl().updateAssigment(req.body);
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
exports.default = studentAssigmentDispatcher;
