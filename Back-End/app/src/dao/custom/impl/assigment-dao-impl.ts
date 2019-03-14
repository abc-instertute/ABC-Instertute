import Promise = require("promise");
import {AssigmentDao} from "../assigment-dao";
import {Assigment} from "../../../entity/assigment";
import {PoolConnection} from "mysql";

export class AssigmentDAOImpl implements AssigmentDao {

    constructor(private connection: PoolConnection) {
    }


    count(): Promise<number> {
        return new Promise((resolve, reject) => {
            this.connection.query("select count(*) as count from assigment",(err, results) => {
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

            this.connection.query(`DELETE FROM assigment WHERE aid='${id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });

    }

    find(id: string): Promise<Array<Assigment>> {
        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM assigment WHERE aid='${id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });

    }

    findAll(): Promise<Array<Assigment>> {
        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM assigment`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });
    }

    save(entity: Assigment): Promise<boolean> {

        return new Promise((resolve, reject) => {

            this.connection.query(`INSERT INTO assigment VALUES ('${entity.aid}','${entity.cid}','${entity.aname}','${entity.description}','${entity.duedate}')`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }

    update(entity: Assigment): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.connection.query(`UPDATE assigment SET cid = '${entity.cid}', aname ='${entity.aname}', description ='${entity.description}', duedate ='${entity.duedate}' WHERE aid='${entity.aid}'`,
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
