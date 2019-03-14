import express = require("express");
import {Course_materialsBoImpl} from "../business/course_materials-bo-impl";
import {error} from "util";
import cors = require("cors");


const courseMaterialDispatcher = express.Router();

courseMaterialDispatcher.route("")
    .get((req, res) => {

        const promise = new Course_materialsBoImpl().findAllCourse_materials();
        promise.then(course_material=>{
            res.status(200).json(course_material);
        }).catch(error=>{
            res.status(500).send(error);
        });

    })
    .post((req, res) => {

        if (!("week" in req.body && "cid" in req.body && "name" in req.body && "file_upload" in req.body )){
            res.status(400).send("Invalid Request Body");
            return;
        }
        const promise = new Course_materialsBoImpl().saveCourse_materials(req.body);
        promise.then(status => res.status(201).json(status))
            .catch(err=>res.status(500).send(err));

    })
    .head((cors({
        exposedHeaders:['X-Count']
    })),(req, res) => {
        const t1= new Date().valueOf();// time stamp
        const promise = new Course_materialsBoImpl().Course_materialsCount();
        promise.then(count=>{
            res.append("X-Count",count+"");
            res.sendStatus(200);
        }).catch(error=>{
            res.status(500);
        });
    })
;


courseMaterialDispatcher.route("/:id")
    .get((req, res) => {

        const promise = new Course_materialsBoImpl().findCourse_materials(req.params.id);
        promise.then(course_material=>{

            if (course_material.length > 0){
                res.status(200).send(course_material[0]);
            }else{
                res.sendStatus(404);
            }

        }).catch(error=>{
            res.status(500).send(error);
        });

    })
    .delete((req, res) => {

        const promise = new Course_materialsBoImpl().deleteCourse_materials(req.params.id);
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

        if (!("week" in req.body && "cid" in req.body && "name" in req.body && "file_upload" in req.body )){
            res.status(400).send("Invalid Request Body");
            return;
        }

        if (req.body.id !== req.params.id){
            res.status(400).send("Mismatched course ID");
            return;
        }

        const promise = new Course_materialsBoImpl().updateCourse_materials(req.body);
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

export default courseMaterialDispatcher;
