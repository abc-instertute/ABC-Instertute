import {LecturesDto} from "../dto/lectures-dto";
import {pool} from "../db/db-pool";
import {DAOTypes, getDAO} from "../dao/dao-factore";
import {LectureDao} from "../dao/custom/lecture-dao";
import Promise = require("promise");

export class LectureBoImpl {

    findAllLecture():Promise<Array<LecturesDto>>{
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    reject(err);
                }else{
                    const assigmentDAO = <LectureDao> getDAO(DAOTypes.LECTURE, connection);

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

    findLecture(id: string): Promise<Array<LecturesDto>>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const assigmentDAO = <LectureDao> getDAO(DAOTypes.LECTURE, connection);

                    const promise = assigmentDAO.find(id);
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

    saveLecture(assigment: LecturesDto): Promise<boolean>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const assigmentDAO = <LectureDao> getDAO(DAOTypes.LECTURE, connection);

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

    updateLecture(assigment: LecturesDto): Promise<boolean>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const customerDAO = <LectureDao> getDAO(DAOTypes.LECTURE, connection);

                    const promise = customerDAO.update(assigment);
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

    deleteLecture(id: string): Promise<boolean>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const assigmentDAO = <LectureDao> getDAO(DAOTypes.LECTURE, connection);

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

    LectureCount():Promise<number>{
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if(err){
                    reject(err)
                }else {
                    const assigmentDAO=<LectureDao> getDAO(DAOTypes.LECTURE, connection);
                    const promise= assigmentDAO.count();
                    promise.then(count =>{
                        resolve(count);
                    } ).catch(err=>{
                        reject(err);
                    })
                }
            })
        });
    }

}
