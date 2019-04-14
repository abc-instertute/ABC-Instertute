import Promise = require("promise");
import {LoginDao} from "../login-dao";
import {Login} from "../../../entity/login";
import {PoolConnection} from "mysql";
import express = require("express");
export class LoginDAOImpl implements LoginDao {
    constructor(private connection: PoolConnection) {
    }


    count(): Promise<number> {
        return new Promise((resolve, reject) => {
            this.connection.query("select count(*) as count from Login",(err, results) => {
                if (err){
                    reject(err);
                }  else {
                    resolve(results[0].count);
                }
            });
        });
    }



    findAll(): Promise<Array<Login>> {
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

    save(entity: Login): Promise<boolean> {

        return new Promise((resolve, reject) => {

            this.connection.query(`INSERT INTO Login VALUES ('${entity.email}','${entity.password}','${entity.position}')`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }

    update(entity: Login): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.connection.query(`UPDATE Login SET password = '${entity.password}' WHERE email ='${entity.email}' and position = '${entity.position}'`,
                (err, results) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
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

    find(id: string): Promise<Array<Login>> {
        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM Login WHERE email='${id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });
    }

    v_login(entity: Login): Promise<Array<Login>> {
        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM Login WHERE email='${entity.email}' and  password ='${entity.password}' and position ='${entity.position}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });
    }


}
