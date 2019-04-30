import express = require("express");
import {LoginBoImpl} from "../business/log_session-bo-impl";
import {error} from "util";
import cors = require("cors");
import mainDispatcher from "./main-dispatcher";

const Log_sessionDispatcher = express.Router();

Log_sessionDispatcher.route("")
    .post((req, res) => {

        if (!("id" in req.body  && "email" in req.body )){
            res.status(400).send("Invalid Request Body");
            return;
        }
        const promise = new LoginBoImpl().saveLogin(req.body);
        promise.then(status => res.status(201).json(status))
            .catch(err=>res.status(500).send(err));

    })

    .get((req, res) => {

        const promise = new LoginBoImpl().findAllLog_session();
        promise.then(assigment=>{
            res.status(200).json(assigment);
        }).catch(error=>{
            res.status(500).send(error);
        });

    })
;
Log_sessionDispatcher.route("/:email")
    .delete((req, res) => {

        const promise = new LoginBoImpl().deleteLogin(req.params.email);
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
;
export default Log_sessionDispatcher;
