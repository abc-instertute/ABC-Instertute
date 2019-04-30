import express = require("express");
import {LoginBoImpl} from "../business/Login-bo-impl";
import {error} from "util";
import cors = require("cors");
import {AssigmentBoImpl} from "../business/assigment-bo-impl";
import mainDespatcher from "./main-dispatcher";
import bodyParser = require('body-parser');
import session = require("express-session");
import cookieParser = require('cookie-parser');
import morgan = require('morgan');
import FileStore = require('session-file-store');
import uuid = require('uuid/v4');

const loginDispatcher = express.Router();
loginDispatcher.use(morgan('dev'));
loginDispatcher.use(bodyParser.urlencoded({ extended: true }));
loginDispatcher.use(cookieParser());
export let fruits: string[] =[];

loginDispatcher.route("/login/:email")
    .get((req, res) => {

        const promise = new LoginBoImpl().findAllLogin();
        promise.then(assigment=>{
            res.status(200).json(assigment);

        }).catch(error=>{
            res.status(500).send(error);
        });

    })
    .post((req, res) => {

        if (!("email" in req.body  && "password" in req.body && "position" in req.body)){
            res.status(400).send("Invalid Request Body");
            return;
        }
        const promise = new LoginBoImpl().saveLogin(req.body);
        promise.then(status => res.status(201).json(status))
            .catch(err=>res.status(500).send(err));

    });

loginDispatcher.route("/login")
    .get((req, res) => {

        const promise = new LoginBoImpl().findLogin(req.params.email);
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

    .post((req, res) => {
        fruits = [];
        res.status(200).json(fruits);
    })

;





loginDispatcher.route("")

    .post((req, res) => {

        if (!("email" in req.body  && "password" in req.body && "position" in req.body)){
            res.status(400).send("Invalid Request Body");
            return;
        }
        const promise = new LoginBoImpl().loginValidation(req.body);
        promise.then(assigement=>{
            if (assigement.length == 1){
                const uniqueId = uuid();
                const email = assigement[0].email;
                fruits = [uniqueId,email];

                res.status(200).json(fruits);
            }else{
                res.sendStatus(404);
            }
        }).catch(error=>{
            res.status(500).send(error);
        });
    })

    .put((req, res) => {
        if (!("email" in req.body  && "password" in req.body && "position" in req.body)){
            res.status(400).send("Invalid Request Body");
            return;
        }

        if (req.body.email !== req.params.email){
            res.status(400).send("Mismatched assigment ID");
            return;
        }

        const promise = new LoginBoImpl().updateLogin(req.body);
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

    .get((req, res) => {
        res.status(200).json(fruits);
    })

;

export default loginDispatcher;
