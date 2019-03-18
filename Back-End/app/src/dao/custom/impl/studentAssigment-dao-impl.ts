import Promise = require("promise");
import {StudentAssigmentDao} from "../studentAssigment-dao";
import {StudentAssigment} from "../../../entity/studentAssigment";
import {PoolConnection} from "mysql";

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

            this.connection.query(`INSERT INTO studentassigment VALUES ('${entity.aid}','${entity.systemDate}','${entity.sid}','${entity.sname}','${entity.cid}','${entity.file_upload}')`,
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
            this.connection.query(`UPDATE studentassigment SET  systemDate ='${entity.systemDate}', sid ='${entity.sid}', sname ='${entity.sname}',cid = '${entity.cid}',file_upload = '${entity.file_upload}' WHERE aid='${entity.aid}'`,
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
