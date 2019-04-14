import {CourseRegistrationDto} from "../dto/courseRegistration-dto";
import {pool} from "../db/db-pool";
import {DAOTypes, getDAO} from "../dao/dao-factore";
import {CourseRegistrationDao} from "../dao/custom/courseRegistration-dao";
import Promise = require("promise");
export class CourseRegistrationBoImpl {

    findAllCourseRegistration():Promise<Array<CourseRegistrationDto>>{
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    reject(err);
                }else{
                    const assigmentDAO = <CourseRegistrationDao> getDAO(DAOTypes.COURSE_REGISTRATION, connection);

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

    findCourseRegistration(id: string): Promise<Array<CourseRegistrationDto>>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const assigmentDAO = <CourseRegistrationDao> getDAO(DAOTypes.COURSE_REGISTRATION, connection);

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

    saveCourseRegistration(assigment: CourseRegistrationDto): Promise<boolean>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const assigmentDAO = <CourseRegistrationDao> getDAO(DAOTypes.COURSE_REGISTRATION, connection);

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

    updateCourseRegistration(assigment: CourseRegistrationDto): Promise<boolean>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const customerDAO = <CourseRegistrationDao> getDAO(DAOTypes.COURSE_REGISTRATION, connection);

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

    deleteCourseRegistration(id: string): Promise<boolean>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const assigmentDAO = <CourseRegistrationDao> getDAO(DAOTypes.COURSE_REGISTRATION, connection);

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

    CourseRegistrationCount():Promise<number>{
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if(err){
                    reject(err)
                }else {
                    const assigmentDAO=<CourseRegistrationDao> getDAO(DAOTypes.COURSE_REGISTRATION, connection);
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

    unEnrolCourseRegistration(id: string): Promise<boolean>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const assigmentDAO = <CourseRegistrationDao> getDAO(DAOTypes.COURSE_REGISTRATION, connection);

                    const promise = assigmentDAO.unEnlolement(id);
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

