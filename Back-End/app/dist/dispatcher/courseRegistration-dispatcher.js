"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var courseRegistration_bo_impl_1 = require("../business/courseRegistration-bo-impl");
var cors = require("cors");
var courseRegistrationDispatcher = express.Router();
courseRegistrationDispatcher.route("")
    .get(function (req, res) {
    var promise = new courseRegistration_bo_impl_1.CourseRegistrationBoImpl().findAllCourseRegistration();
    promise.then(function (assigment) {
        res.status(200).json(assigment);
    }).catch(function (error) {
        res.status(500).send(error);
    });
})
    .post(function (req, res) {
    if (!("sid" in req.body && "cid" in req.body && "position" in req.body)) {
        res.status(400).send("Invalid Request Body");
        return;
    }
    var promise = new courseRegistration_bo_impl_1.CourseRegistrationBoImpl().saveCourseRegistration(req.body);
    promise.then(function (status) { return res.status(201).json(status); })
        .catch(function (err) { return res.status(500).send(err); });
})
    .head((cors({
    exposedHeaders: ['X-Count']
})), function (req, res) {
    var t1 = new Date().valueOf(); // time stamp
    var promise = new courseRegistration_bo_impl_1.CourseRegistrationBoImpl().CourseRegistrationCount();
    promise.then(function (count) {
        res.append("X-Count", count + "");
        res.sendStatus(200);
    }).catch(function (error) {
        res.status(500);
    });
});
courseRegistrationDispatcher.route("/:sid")
    .get(function (req, res) {
    var promise = new courseRegistration_bo_impl_1.CourseRegistrationBoImpl().findCourseRegistration(req.params.sid);
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
    var promise = new courseRegistration_bo_impl_1.CourseRegistrationBoImpl().deleteCourseRegistration(req.params.sid);
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
    if (!("sid" in req.body && "cid" in req.body && "position" in req.body)) {
        res.status(400).send("Invalid Request Body");
        return;
    }
    if (req.body.sid !== req.params.sid) {
        res.status(400).send("Mismatched assigment ID");
        return;
    }
    var promise = new courseRegistration_bo_impl_1.CourseRegistrationBoImpl().updateCourseRegistration(req.body);
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
exports.default = courseRegistrationDispatcher;
