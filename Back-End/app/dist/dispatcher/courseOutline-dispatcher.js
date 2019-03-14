"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var courseOutline_bo_impl_1 = require("../business/courseOutline-bo-impl");
var cors = require("cors");
var courseOutlineDispatcher = express.Router();
courseOutlineDispatcher.route("")
    .get(function (req, res) {
    var promise = new courseOutline_bo_impl_1.CourseOutlineBoImpl().findAllCourseOutline();
    promise.then(function (assigment) {
        res.status(200).json(assigment);
    }).catch(function (error) {
        res.status(500).send(error);
    });
})
    .post(function (req, res) {
    if (!("id" in req.body && "courseOutline" in req.body)) {
        res.status(400).send("Invalid Request Body");
        return;
    }
    var promise = new courseOutline_bo_impl_1.CourseOutlineBoImpl().saveCourseOutline(req.body);
    promise.then(function (status) { return res.status(201).json(status); })
        .catch(function (err) { return res.status(500).send(err); });
})
    .head((cors({
    exposedHeaders: ['X-Count']
})), function (req, res) {
    var t1 = new Date().valueOf(); // time stamp
    var promise = new courseOutline_bo_impl_1.CourseOutlineBoImpl().CourseOutlineCount();
    promise.then(function (count) {
        res.append("X-Count", count + "");
        res.sendStatus(200);
    }).catch(function (error) {
        res.status(500);
    });
});
courseOutlineDispatcher.route("/:id")
    .get(function (req, res) {
    var promise = new courseOutline_bo_impl_1.CourseOutlineBoImpl().findCourseOutline(req.params.id);
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
    var promise = new courseOutline_bo_impl_1.CourseOutlineBoImpl().deleteCourseOutline(req.params.id);
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
    if (!("id" in req.body && "courseOutline" in req.body)) {
        res.status(400).send("Invalid Request Body");
        return;
    }
    if (req.body.id !== req.params.id) {
        res.status(400).send("Mismatched assigment ID");
        return;
    }
    var promise = new courseOutline_bo_impl_1.CourseOutlineBoImpl().updateCourseOutline(req.body);
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
exports.default = courseOutlineDispatcher;
