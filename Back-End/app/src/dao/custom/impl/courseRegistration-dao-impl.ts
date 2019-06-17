import Promise = require("promise");
import {CourseRegistrationDao} from "../courseRegistration-dao";
import {CourseRegistration} from "../../../entity/courseRegistration";
import {PoolConnection} from "mysql";
import express = require("express");
export class CourseRegistrationDAOImpl implements CourseRegistrationDao {

    constructor(private connection: PoolConnection) {
    }


    count(): Promise<number> {
        return new Promise((resolve, reject) => {
            this.connection.query("select count(*) as count from CourseRegistration",(err, results) => {
                if (err){
                    reject(err);
                }  else {
                    resolve(results[0].count);
                }
            });
        });
    }



    findAll(): Promise<Array<CourseRegistration>> {
        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM CourseRegistration`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });
    }

    save(entity: CourseRegistration): Promise<boolean> {

        return new Promise((resolve, reject) => {

            this.connection.query(`INSERT INTO CourseRegistration VALUES ('${entity.cr_id}','${entity.sid}','${entity.cid}','${entity.position}')`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }

    update(entity: CourseRegistration): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.connection.query(`UPDATE CourseRegistration SET cid = '${entity.cid}' WHERE sid='${entity.sid}'`,
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

            this.connection.query(`DELETE FROM CourseRegistration WHERE cr_id='${id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }

    find(id: string): Promise<Array<CourseRegistration>> {
        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM CourseRegistration WHERE cr_id='${id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });
    }

    unEnlolement(cr_id: string): Promise<boolean> {
        return new Promise((resolve, reject) => {

            this.connection.query(`DELETE FROM CourseRegistration WHERE cr_id='${cr_id}'`,
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
