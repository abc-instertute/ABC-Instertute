"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var new_course_bo_impl_1 = require("../business/new_course-bo-impl");
var cors = require("cors");
var new_courseDispatcher = express.Router();
exports.course_id = [];
new_courseDispatcher.route("")
    .get(function (req, res) {
    var promise = new new_course_bo_impl_1.New_courseBoImpl().findAllNew_course();
    promise.then(function (assigment) {
        res.status(200).json(assigment);
    }).catch(function (error) {
        res.status(500).send(error);
    });
})
    .post(function (req, res) {
    console.log("sdefs");
    if (!("file_upload" in req.body && "id" in req.body && "name" in req.body && "free" in req.body && "seat" in req.body && "schedule" in req.body && "period" in req.body && "description" in req.body && "outcome" in req.body && "audience" in req.body)) {
        res.status(400).send("Invalid Request Body");
        return;
    }
    var promise = new new_course_bo_impl_1.New_courseBoImpl().saveNew_course(req.body);
    promise.then(function (status) { return res.status(201).json(status); })
        .catch(function (err) { return res.status(500).send(err); });
})
    .head((cors({
    exposedHeaders: ['X-Count']
})), function (req, res) {
    var t1 = new Date().valueOf(); // time stamp
    var promise = new new_course_bo_impl_1.New_courseBoImpl().New_courseCount();
    promise.then(function (count) {
        res.append("X-Count", count + "");
        res.sendStatus(200);
    }).catch(function (error) {
        res.status(500);
    });
});
new_courseDispatcher.route("/:id")
    .get(function (req, res) {
    var promise = new new_course_bo_impl_1.New_courseBoImpl().findNew_course(req.params.id);
    promise.then(function (assigement) {
        if (assigement.length > 0) {
            console.log(assigement[0].file_upload);
            exports.course_id = [assigement[0].file_upload, assigement[0].id, assigement[0].name, assigement[0].free, assigement[0].seat.toString(), assigement[0].schedule, assigement[0].period, assigement[0].description, assigement[0].outcome, assigement[0].audience];
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
    var promise = new new_course_bo_impl_1.New_courseBoImpl().deleteNew_course(req.params.id);
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
    if (!("file_upload" in req.body && "id" in req.body && "name" in req.body && "free" in req.body && "seat" in req.body && "schedule" in req.body && "period" in req.body && "description" in req.body && "outcome" in req.body && "audience" in req.body)) {
        res.status(400).send("Invalid Request Body");
        return;
    }
    if (req.body.id !== req.params.id) {
        res.status(400).send("Mismatched course ID");
        return;
    }
    var promise = new new_course_bo_impl_1.New_courseBoImpl().updateNew_course(req.body);
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
new_courseDispatcher.route("/sew")
    .post(function (req, res) {
    console.log(exports.course_id);
    res.status(200).json(exports.course_id);
});
exports.default = new_courseDispatcher;
