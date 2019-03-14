import express = require("express");
import Promise = require("promise");
import {LectureDao} from "../lecture-dao";
import {Lectures} from "../../../entity/lectures";
import {PoolConnection} from "mysql";

export class LectureDAOImpl implements LectureDao{

    constructor(private connection: PoolConnection) {
    }

    count(): Promise<number> {
        return new Promise((resolve, reject) => {
            this.connection.query("select count(*) as count from lectures",(err, results) => {
                if (err){
                    reject(err);
                }  else {
                    resolve(results[0].count);
                }
            });
        });
    }

    delete(id: string): Promise<boolean> {
        return new Promise((resolve, reject) => {

            this.connection.query(`DELETE FROM lectures WHERE aid='${id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }

    find(id: string): Promise<Array<Lectures>> {
        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM lectures WHERE aid='${id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });

    }

    findAll(): Promise<Array<Lectures>> {
        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM lectures`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });
    }

    save(entity: Lectures): Promise<boolean> {
        return new Promise((resolve, reject) => {

            this.connection.query(`INSERT INTO lectures VALUES ('${entity.aid}','${entity.fname}','${entity.lname}','${entity.position}','${entity.bday}','${entity.address}','${entity.phone}','${entity.email}','${entity.password}')`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }

    update(entity: Lectures): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.connection.query(`UPDATE lectures SET fname = '${entity.fname}', lname ='${entity.lname}', position ='${entity.position}', bday ='${entity.bday}',address = '${entity.address}', phone ='${entity.phone}', email ='${entity.email}', password ='${entity.password}' WHERE aid='${entity.aid}'`,
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
