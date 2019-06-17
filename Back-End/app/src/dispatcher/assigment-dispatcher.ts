import express = require("express");
import {AssigmentBoImpl} from "../business/assigment-bo-impl";
import {error} from "util";
import cors = require("cors");
import {LoginBoImpl} from "../business/login-bo-impl";
import {fruits} from "./login-dispatcher";
export let ass_link: string[] ;


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

        if (!("aid" in req.body  && "cid" in req.body && "aname" in req.body && "description" in req.body && "duedate" in req.body)){
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

        const promise = new AssigmentBoImpl().deleteAssigment(req.params.aid);
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

        if (!("aid" in req.body  && "cid" in req.body && "aname" in req.body && "description" in req.body && "duedate" in req.body )){
            res.status(400).send("Invalid Request Body");
            return;
        }

        if (req.body.aid !== req.params.aid){
            res.status(400).send("Mismatched assigment ID");
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


assigmentDispatcher.route("/assigmentID/:id")

    .get((req, res) => {

        const promise = new AssigmentBoImpl().findAssigment(req.params.id);
        promise.then(assigement=>{

            if (assigement.length > 0){
                ass_link = [assigement[0].aid,assigement[0].aname,assigement[0].description,assigement[0].duedate,assigement[0].cid];
                ass_link = ['A02','Zcz','as','ds','sds'];
                res.status(200).send(ass_link);
            }else{
                res.sendStatus(404);
            }

        }).catch(error=>{
            res.status(500).send(error);
        });

    })
;

assigmentDispatcher.route("/ass_link")
    .post((req, res) => {
        res.status(200).send(ass_link);
    })
;
export default assigmentDispatcher;
