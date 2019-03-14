"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var course_materials_bo_impl_1 = require("../business/course_materials-bo-impl");
var cors = require("cors");
var courseMaterialDispatcher = express.Router();
courseMaterialDispatcher.route("")
    .get(function (req, res) {
    var promise = new course_materials_bo_impl_1.Course_materialsBoImpl().findAllCourse_materials();
    promise.then(function (course_material) {
        res.status(200).json(course_material);
    }).catch(function (error) {
        res.status(500).send(error);
    });
})
    .post(function (req, res) {
    if (!("week" in req.body && "cid" in req.body && "name" in req.body && "file_upload" in req.body)) {
        res.status(400).send("Invalid Request Body");
        return;
    }
    var promise = new course_materials_bo_impl_1.Course_materialsBoImpl().saveCourse_materials(req.body);
    promise.then(function (status) { return res.status(201).json(status); })
        .catch(function (err) { return res.status(500).send(err); });
})
    .head((cors({
    exposedHeaders: ['X-Count']
})), function (req, res) {
    var t1 = new Date().valueOf(); // time stamp
    var promise = new course_materials_bo_impl_1.Course_materialsBoImpl().Course_materialsCount();
    promise.then(function (count) {
        res.append("X-Count", count + "");
        res.sendStatus(200);
    }).catch(function (error) {
        res.status(500);
    });
});
courseMaterialDispatcher.route("/:id")
    .get(function (req, res) {
    var promise = new course_materials_bo_impl_1.Course_materialsBoImpl().findCourse_materials(req.params.id);
    promise.then(function (course_material) {
        if (course_material.length > 0) {
            res.status(200).send(course_material[0]);
        }
        else {
            res.sendStatus(404);
        }
    }).catch(function (error) {
        res.status(500).send(error);
    });
})
    .delete(function (req, res) {
    var promise = new course_materials_bo_impl_1.Course_materialsBoImpl().deleteCourse_materials(req.params.id);
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
    if (!("week" in req.body && "cid" in req.body && "name" in req.body && "file_upload" in req.body)) {
        res.status(400).send("Invalid Request Body");
        return;
    }
    if (req.body.id !== req.params.id) {
        res.status(400).send("Mismatched course ID");
        return;
    }
    var promise = new course_materials_bo_impl_1.Course_materialsBoImpl().updateCourse_materials(req.body);
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
exports.default = courseMaterialDispatcher;
