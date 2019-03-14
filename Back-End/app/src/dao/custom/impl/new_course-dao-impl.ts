import Promise = require("promise");
import {New_courseDao} from "../new_course-dao";
import {New_course} from "../../../entity/new_course";
import {PoolConnection} from "mysql";

export class NewCourseDAOImpl implements New_courseDao{

    constructor(private connection: PoolConnection) {
    }

    count(): Promise<number> {
        return new Promise((resolve, reject) => {
            this.connection.query("select count(*) as count from new_course",(err, results) => {
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

            this.connection.query(`DELETE FROM new_course WHERE id='${id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }

    find(id: string): Promise<Array<New_course>> {
        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM new_course WHERE id='${id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });
    }

    findAll(): Promise<Array<New_course>> {
        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM new_course`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });
    }

    save(entity: New_course): Promise<boolean> {
        return new Promise((resolve, reject) => {

            this.connection.query(`INSERT INTO new_course VALUES ('${entity.file_upload}','${entity.id}','${entity.name}','${entity.free}','${entity.seat}','${entity.schedule}','${entity.period}','${entity.description}','${entity.outcome}','${entity.audience}')`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }

    update(entity: New_course): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.connection.query(`UPDATE new_course SET file_upload = '${entity.file_upload}', name ='${entity.name}', free ='${entity.free}',seat = '${entity.seat}', schedule ='${entity.schedule}', period ='${entity.period}', description ='${entity.description}', outcome ='${entity.outcome}' , audience ='${entity.audience}' WHERE aid='${entity.id}'`,
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
