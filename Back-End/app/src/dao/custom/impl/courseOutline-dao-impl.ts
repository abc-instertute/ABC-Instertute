import Promise = require("promise");
import {CourseOutlineDao} from "../courseOutline-dao";
import {CourseOutline} from "../../../entity/courseOutline";
import {PoolConnection} from "mysql";

export class CourseOutlineDAOImpl implements CourseOutlineDao{

    constructor(private connection: PoolConnection) {
    }

    count(): Promise<number> {
        return new Promise((resolve, reject) => {
            this.connection.query("select count(*) as count from courseoutline",(err, results) => {
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

            this.connection.query(`DELETE FROM courseoutline WHERE id='${id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }

    find(id: string): Promise<Array<CourseOutline>> {
        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM courseoutline WHERE id='${id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });
    }

    findAll(): Promise<Array<CourseOutline>> {
        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM courseoutline`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });
    }

    save(entity: CourseOutline): Promise<boolean> {
        return new Promise((resolve, reject) => {

            this.connection.query(`INSERT INTO courseoutline VALUES ('${entity.id}','${entity.courseOutline}')`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }

    update(entity: CourseOutline): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.connection.query(`UPDATE courseoutline SET courseOutline = '${entity.courseOutline}' WHERE id='${entity.id}'`,
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
