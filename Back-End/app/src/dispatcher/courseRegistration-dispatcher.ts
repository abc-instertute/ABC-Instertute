import express = require("express");
import {CourseRegistrationBoImpl} from "../business/courseRegistration-bo-impl";
import {error} from "util";
import cors = require("cors");
const courseRegistrationDispatcher = express.Router();

courseRegistrationDispatcher.route("")
    .get((req, res) => {

        const promise = new CourseRegistrationBoImpl().findAllCourseRegistration();
        promise.then(assigment=>{
            res.status(200).json(assigment);
        }).catch(error=>{
            res.status(500).send(error);
        });

    })
    .post((req, res) => {

        if (!("sid" in req.body  && "cid" in req.body && "position" in req.body)){
            res.status(400).send("Invalid Request Body");
            return;
        }
        const promise = new CourseRegistrationBoImpl().saveCourseRegistration(req.body);
        promise.then(status => res.status(201).json(status))
            .catch(err=>res.status(500).send(err));

    })
    .head((cors({
        exposedHeaders:['X-Count']
    })),(req, res) => {
        const t1= new Date().valueOf();// time stamp
        const promise = new CourseRegistrationBoImpl().CourseRegistrationCount();
        promise.then(count=>{
            res.append("X-Count",count+"");
            res.sendStatus(200);
        }).catch(error=>{
            res.status(500);
        });
    })
;


courseRegistrationDispatcher.route("/:sid")
    .get((req, res) => {

        const promise = new CourseRegistrationBoImpl().findCourseRegistration(req.params.sid);
        promise.then(assigement=>{

            if (assigement.length > 0){
                res.status(200).send(assigement[0]);
            }else{
                res.sendStatus(404);
            }

        }).catch(error=>{
            res.status(500).send(error);
        });

    })
    .delete((req, res) => {

        const promise = new CourseRegistrationBoImpl().deleteCourseRegistration(req.params.sid);
        promise.then(status=>{

            if (status){
                res.status(200).send(true);
            }else{
                res.sendStatus(404);
            }

        }).catch(error=>{
            res.status(500).send(error);
        });

    })
    .put((req, res) => {
        if (!("sid" in req.body  && "cid" in req.body && "position" in req.body)){
            res.status(400).send("Invalid Request Body");
            return;
        }

        if (req.body.sid !== req.params.sid){
            res.status(400).send("Mismatched assigment ID");
            return;
        }

        const promise = new CourseRegistrationBoImpl().updateCourseRegistration(req.body);
        promise.then(status=>{

            if (status){
                res.status(200).send(true);
            }else{
                res.sendStatus(404);
            }

        }).catch(error=>{
            res.status(500).send(error);
        });

    });

export default courseRegistrationDispatcher;
