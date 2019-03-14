import express = require("express");
import {AssigmentBoImpl} from "../business/assigment-bo-impl";
import {error} from "util";
import cors = require("cors");


const assigmentDispatcher = express.Router();

assigmentDispatcher.route("")
    .get((req, res) => {

        const promise = new AssigmentBoImpl().findAllAssigment();
        promise.then(assigment=>{
            res.status(200).json(assigment);
        }).catch(error=>{
            res.status(500).send(error);
        });

    })
    .post((req, res) => {

        if (!("systemDate" in req.body && "sid" in req.body && "sname" in req.body && "cid" in req.body && "file_upload" in req.body)){
            res.status(400).send("Invalid Request Body");
            return;
        }
        const promise = new AssigmentBoImpl().saveAssigment(req.body);
        promise.then(status => res.status(201).json(status))
            .catch(err=>res.status(500).send(err));

    })
    .head((cors({
        exposedHeaders:['X-Count']
    })),(req, res) => {
        const t1= new Date().valueOf();// time stamp
        const promise = new AssigmentBoImpl().AssigmentCount();
        promise.then(count=>{
            res.append("X-Count",count+"");
            res.sendStatus(200);
        }).catch(error=>{
            res.status(500);
        });
    })
;


assigmentDispatcher.route("/:id")
    .get((req, res) => {

        const promise = new AssigmentBoImpl().findAssigment(req.params.id);
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

        const promise = new AssigmentBoImpl().deleteAssigment(req.params.id);
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

        if (!("systemDate" in req.body && "sid" in req.body && "sname" in req.body && "cid" in req.body && "file_upload" in req.body)){
            res.status(400).send("Invalid Request Body");
            return;
        }

        if (req.body.id !== req.params.id){
            res.status(400).send("Mismatched Customer ID");
            return;
        }

        const promise = new AssigmentBoImpl().updateAssigment(req.body);
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

export default assigmentDispatcher;
