import Promise = require("promise");
import {StudentAssigmentDao} from "../studentAssigment-dao";
import {StudentAssigment} from "../../../entity/studentAssigment";
import {PoolConnection} from "mysql";
import {Assigment} from "../../../entity/assigment";

export class StudentAssigmentDAOImpl implements StudentAssigmentDao {

    constructor(private connection: PoolConnection) {
    }

    count(): Promise<number> {
        return new Promise((resolve, reject) => {
            this.connection.query("select count(*) as count from studentassigment",(err, results) => {
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

            this.connection.query(`DELETE FROM studentassigment WHERE aid='${id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }

    find(id: string): Promise<Array<StudentAssigment>> {
        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM studentassigment WHERE aid='${id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });
    }

    findAll(): Promise<Array<StudentAssigment>> {
        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM studentassigment`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });
    }

    save(entity: StudentAssigment): Promise<boolean> {
        return new Promise((resolve, reject) => {

            this.connection.query(`INSERT INTO studentassigment VALUES ('${entity.aid}','${entity.systemDate}','${entity.sid}','${entity.cid}','${entity.file_upload}')`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }

    update(entity: StudentAssigment): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.connection.query(`UPDATE studentassigment SET  systemDate ='${entity.systemDate}', sid ='${entity.sid}',cid = '${entity.cid}',file_upload = '${entity.file_upload}' WHERE aid='${entity.aid}'`,
                (err, results) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }

    v_One_student(entity: StudentAssigment): Promise<Array<StudentAssigment>> {
        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM StudentAssigment WHERE aid='${entity.aid}' and  cid ='${entity.cid}' and sid ='${entity.sid}'`,
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
