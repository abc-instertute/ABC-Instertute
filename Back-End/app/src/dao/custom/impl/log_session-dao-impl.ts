import Promise = require("promise");
import {Log_sessionDao} from "../log_session-dao";
import {Log_session} from "../../../entity/log_session";
import {PoolConnection} from "mysql";
import express = require("express");
export class Log_sessionDaoImpl implements Log_sessionDao{
    constructor(private connection: PoolConnection) {
    }

    delete(id: string): Promise<boolean> {
        return new Promise((resolve, reject) => {

            this.connection.query(`DELETE FROM Login WHERE email='${id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }

    findAll(): Promise<Array<Log_session>> {
        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM Login`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });
    }

    save(l: Log_session): Promise<boolean> {
        return new Promise((resolve, reject) => {

            this.connection.query(`INSERT INTO Login VALUES ('${l.id}','${l.email}')`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }




}
