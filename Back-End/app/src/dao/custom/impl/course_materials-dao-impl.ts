import express = require("express");
import Promise = require("promise");
import {Course_materialsDao} from "../course_materials-dao";
import {Course_materials} from "../../../entity/course_materials";
import {PoolConnection} from "mysql";

export class Course_materialDAOImpl implements Course_materialsDao{

    constructor(private connection: PoolConnection) {
    }

    count(): Promise<number> {
        return new Promise((resolve, reject) => {
            this.connection.query("select count(*) as count from course_materials",(err, results) => {
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

            this.connection.query(`DELETE FROM course_materials WHERE cid='${id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }

    find(id: string): Promise<Array<Course_materials>> {
        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM course_materials WHERE cid='${id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });
    }

    findAll(): Promise<Array<Course_materials>> {
        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM course_materials`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });
    }

    save(entity: Course_materials): Promise<boolean> {
        return new Promise((resolve, reject) => {

            this.connection.query(`INSERT INTO course_materials VALUES ('${entity.cid}','${entity.week}','${entity.name}','${entity.file_upload}')`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }

    update(entity: Course_materials): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.connection.query(`UPDATE course_materials SET week = '${entity.week}', name ='${entity.name}', file_upload ='${entity.file_upload}' WHERE cid='${entity.cid}'`,
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
