import express = require("express");
import {New_courseBoImpl} from "../business/new_course-bo-impl";
import {error} from "util";
import cors = require("cors");

const new_courseDispatcher = express.Router();
export let course_id: string[]=[];
new_courseDispatcher.route("")
    .get((req, res) => {

        const promise = new New_courseBoImpl().findAllNew_course();
        promise.then(assigment=>{
            res.status(200).json(assigment);
        }).catch(error=>{
            res.status(500).send(error);
        });

    })
    .post((req, res) => {

        if (!("file_upload" in req.body && "id" in req.body && "name" in req.body && "free" in req.body && "seat" in req.body && "schedule" in req.body && "period" in req.body && "description" in req.body && "outcome" in req.body && "audience" in req.body)){
            res.status(400).send("Invalid Request Body");
            return;
        }
        const promise = new New_courseBoImpl().saveNew_course(req.body);
        promise.then(status => res.status(201).json(status))
            .catch(err=>res.status(500).send(err));

    })
    .head((cors({
        exposedHeaders:['X-Count']
    })),(req, res) => {
        const t1= new Date().valueOf();// time stamp
        const promise = new New_courseBoImpl().New_courseCount();
        promise.then(count=>{
            res.append("X-Count",count+"");
            res.sendStatus(200);
        }).catch(error=>{
            res.status(500);
        });
    })
;


new_courseDispatcher.route("/:id")
    .get((req, res) => {

        const promise = new New_courseBoImpl().findNew_course(req.params.id);
        promise.then(assigement=>{
            if (assigement.length > 0){
                console.log(assigement[0].file_upload);
                course_id = [assigement[0].file_upload,assigement[0].id,assigement[0].name,assigement[0].free,assigement[0].seat.toString(),assigement[0].schedule,assigement[0].period,assigement[0].description,assigement[0].outcome,assigement[0].audience];

                res.status(200).send(assigement[0]);
            }else{
                res.sendStatus(404);
            }

        }).catch(error=>{
            res.status(500).send(error);
        });

    })
    .delete((req, res) => {

        const promise = new New_courseBoImpl().deleteNew_course(req.params.id);
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

        if (!("file_upload" in req.body && "id" in req.body && "name" in req.body && "free" in req.body && "seat" in req.body && "schedule" in req.body && "period" in req.body && "description" in req.body && "outcome" in req.body && "audience" in req.body)){
            res.status(400).send("Invalid Request Body");
            return;
        }

        if (req.body.id !== req.params.id){
            res.status(400).send("Mismatched course ID");
            return;
        }

        const promise = new New_courseBoImpl().updateNew_course(req.body);
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
new_courseDispatcher.route("/sew")
    .post((req, res) => {
        console.log(course_id);
        res.status(200).json(course_id);
    })
;
export default new_courseDispatcher;

