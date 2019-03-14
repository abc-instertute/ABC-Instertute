"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var lecture_bo_impl_1 = require("../business/lecture-bo-impl");
var cors = require("cors");
var lectureDispatcher = express.Router();
lectureDispatcher.route("")
    .get(function (req, res) {
    var promise = new lecture_bo_impl_1.LectureBoImpl().findAllLecture();
    promise.then(function (assigment) {
        res.status(200).json(assigment);
    }).catch(function (error) {
        res.status(500).send(error);
    });
})
    .post(function (req, res) {
    if (!("aid" in req.body && "fname" in req.body && "lname" in req.body && "position" in req.body && "bday" in req.body && "address" in req.body && "phone" in req.body && "email" in req.body && "password" in req.body)) {
        res.status(400).send("Invalid Request Body");
        return;
    }
    var promise = new lecture_bo_impl_1.LectureBoImpl().saveLecture(req.body);
    promise.then(function (status) { return res.status(201).json(status); })
        .catch(function (err) { return res.status(500).send(err); });
})
    .head((cors({
    exposedHeaders: ['X-Count']
})), function (req, res) {
    var t1 = new Date().valueOf(); // time stamp
    var promise = new lecture_bo_impl_1.LectureBoImpl().LectureCount();
    promise.then(function (count) {
        res.append("X-Count", count + "");
        res.sendStatus(200);
    }).catch(function (error) {
        res.status(500);
    });
});
lectureDispatcher.route("/:id")
    .get(function (req, res) {
    var promise = new lecture_bo_impl_1.LectureBoImpl().findLecture(req.params.id);
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
    var promise = new lecture_bo_impl_1.LectureBoImpl().deleteLecture(req.params.id);
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
    if (!("aid" in req.body && "fname" in req.body && "lname" in req.body && "position" in req.body && "bday" in req.body && "address" in req.body && "phone" in req.body && "email" in req.body && "password" in req.body)) {
        res.status(400).send("Invalid Request Body");
        return;
    }
    if (req.body.id !== req.params.id) {
        res.status(400).send("Mismatched assigment ID");
        return;
    }
    var promise = new lecture_bo_impl_1.LectureBoImpl().updateLecture(req.body);
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
exports.default = lectureDispatcher;
