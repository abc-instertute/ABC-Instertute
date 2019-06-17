"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var assigment_bo_impl_1 = require("../business/assigment-bo-impl");
var cors = require("cors");
var assigmentDispatcher = express.Router();
assigmentDispatcher.route("")
    .get(function (req, res) {
    var promise = new assigment_bo_impl_1.AssigmentBoImpl().findAllAssigment();
    promise.then(function (assigment) {
        res.status(200).json(assigment);
    }).catch(function (error) {
        res.status(500).send(error);
    });
})
    .post(function (req, res) {
    if (!("aid" in req.body && "cid" in req.body && "aname" in req.body && "description" in req.body && "duedate" in req.body)) {
        res.status(400).send("Invalid Request Body");
        return;
    }
    var promise = new assigment_bo_impl_1.AssigmentBoImpl().saveAssigment(req.body);
    promise.then(function (status) { return res.status(201).json(status); })
        .catch(function (err) { return res.status(500).send(err); });
})
    .head((cors({
    exposedHeaders: ['X-Count']
})), function (req, res) {
    var t1 = new Date().valueOf(); // time stamp
    var promise = new assigment_bo_impl_1.AssigmentBoImpl().AssigmentCount();
    promise.then(function (count) {
        res.append("X-Count", count + "");
        res.sendStatus(200);
    }).catch(function (error) {
        res.status(500);
    });
});
assigmentDispatcher.route("/:id")
    .get(function (req, res) {
    var promise = new assigment_bo_impl_1.AssigmentBoImpl().findAssigment(req.params.id);
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
    var promise = new assigment_bo_impl_1.AssigmentBoImpl().deleteAssigment(req.params.aid);
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
    if (!("aid" in req.body && "cid" in req.body && "aname" in req.body && "description" in req.body && "duedate" in req.body)) {
        res.status(400).send("Invalid Request Body");
        return;
    }
    if (req.body.aid !== req.params.aid) {
        res.status(400).send("Mismatched assigment ID");
        return;
    }
    var promise = new assigment_bo_impl_1.AssigmentBoImpl().updateAssigment(req.body);
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
assigmentDispatcher.route("/assigmentID/:id")
    .get(function (req, res) {
    var promise = new assigment_bo_impl_1.AssigmentBoImpl().findAssigment(req.params.id);
    promise.then(function (assigement) {
        if (assigement.length > 0) {
            exports.ass_link = [assigement[0].aid, assigement[0].aname, assigement[0].description, assigement[0].duedate, assigement[0].cid];
            exports.ass_link = ['A02', 'Zcz', 'as', 'ds', 'sds'];
            res.status(200).send(exports.ass_link);
        }
        else {
            res.sendStatus(404);
        }
    }).catch(function (error) {
        res.status(500).send(error);
    });
});
assigmentDispatcher.route("/ass_link")
    .post(function (req, res) {
    res.status(200).send(exports.ass_link);
});
exports.default = assigmentDispatcher;
