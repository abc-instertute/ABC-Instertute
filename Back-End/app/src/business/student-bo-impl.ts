import {StudentDto} from "../dto/student-dto";
import {pool} from "../db/db-pool";
import {DAOTypes, getDAO} from "../dao/dao-factore";
import {StudentDAO} from "../dao/custom/student-dao";
import Promise = require("promise");

export class StudentBoImpl {

    findAllStudent():Promise<Array<StudentDto>>{
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    reject(err);
                }else{
                    const assigmentDAO = <StudentDAO> getDAO(DAOTypes.STUDENT, connection);

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

    findStudent(id: string): Promise<Array<StudentDto>>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const assigmentDAO = <StudentDAO> getDAO(DAOTypes.STUDENT, connection);

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

    saveStudent(assigment: StudentDto): Promise<boolean>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const assigmentDAO = <StudentDAO> getDAO(DAOTypes.STUDENT, connection);

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

    updateStudent(assigment: StudentDto): Promise<boolean>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const customerDAO = <StudentDAO> getDAO(DAOTypes.STUDENT, connection);

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

    deleteStudent(id: string): Promise<boolean>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const assigmentDAO = <StudentDAO> getDAO(DAOTypes.STUDENT, connection);

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

    StudentCount():Promise<number>{
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if(err){
                    reject(err)
                }else {
                    const assigmentDAO=<StudentDAO> getDAO(DAOTypes.STUDENT, connection);
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
