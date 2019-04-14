import {Log_sessionDto} from "../dto/log_session-dto";
import {pool} from "../db/db-pool";
import {DAOTypes, getDAO} from "../dao/dao-factore";
import {Log_sessionDao} from "../dao/custom/log_session-dao";
import Promise = require("promise");
import {Log_session} from "../entity/log_session";

export class LoginBoImpl {

    findAllLog_session():Promise<Array<Log_sessionDto>>{
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    reject(err);
                }else{
                    const assigmentDAO = <Log_sessionDao> getDAO(DAOTypes.LOG_SESSION, connection);

                    const promise = assigmentDAO.findAll();
                    promise.then(assigment => {

                        resolve(assigment);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });
                }
            });
        });
    }

    saveLogin(assigment: Log_sessionDto): Promise<boolean>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const assigmentDAO = <Log_sessionDao> getDAO(DAOTypes.LOG_SESSION, connection);

                    const promise = assigmentDAO.save(assigment);
                    promise.then(result => {
                        resolve(result);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });

                }

            });


        });
    }



    deleteLogin(id: string): Promise<boolean>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const assigmentDAO = <Log_sessionDao> getDAO(DAOTypes.LOG_SESSION, connection);

                    const promise = assigmentDAO.delete(id);
                    promise.then(result => {
                        resolve(result);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });

                }

            });


        });
    }

}

