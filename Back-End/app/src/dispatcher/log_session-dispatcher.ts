import express = require("express");
import {LoginBoImpl} from "../business/Login-bo-impl";
import {error} from "util";
import cors = require("cors");
import {AssigmentBoImpl} from "../business/assigment-bo-impl";
import mainDespatcher from "./main-dispatcher";

const loginDispatcher = express.Router();

loginDispatcher.route("/log_session")
    .post((req, res) => {

        if (!("id" in req.body  && "email" in req.body )){
            res.status(400).send("Invalid Request Body");
            return;
        }
        const promise = new LoginBoImpl().saveLogin(req.body);
        promise.then(status => res.status(201).json(status))
            .catch(err=>res.status(500).send(err));

    })
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

export default loginDispatcher;
