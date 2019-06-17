import Promise = require("promise");
import {StudentDAO} from "../student-dao";
import {Student} from "../../../entity/student";
import {PoolConnection} from "mysql";

export class StudentDAOImpl implements StudentDAO{

    constructor(private connection: PoolConnection) {
    }

    count(): Promise<number> {
        return new Promise((resolve, reject) => {
            this.connection.query("select count(*) as count from student",(err, results) => {
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

            this.connection.query(`DELETE FROM student WHERE sid='${id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }

    find(id: string): Promise<Array<Student>> {
        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM student WHERE fname='${id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });
    }

    findAll(): Promise<Array<Student>> {
        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM student`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });
    }

    save(entity: Student): Promise<boolean> {
        return new Promise((resolve, reject) => {

            this.connection.query(`INSERT INTO student VALUES ('${entity.sid}','${entity.fname}','${entity.lname}','${entity.bday}','${entity.address}','${entity.phone}','${entity.email}','${entity.password}')`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }

    update(entity: Student): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.connection.query(`UPDATE student SET fname = '${entity.fname}', lname ='${entity.lname}', bday ='${entity.bday}',address = '${entity.address}', phone ='${entity.phone}', email ='${entity.email}', password ='${entity.password}' WHERE sid='${entity.sid}'`,
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
