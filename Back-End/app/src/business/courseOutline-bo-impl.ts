import {CourseOutlineDto} from "../dto/courseOutline-dto";
import {pool} from "../db/db-pool";
import {DAOTypes, getDAO} from "../dao/dao-factore";
import {CourseOutlineDao} from "../dao/custom/courseOutline-dao";
import Promise = require("promise");

export class CourseOutlineBoImpl {

    findAllCourseOutline():Promise<Array<CourseOutlineDto>>{
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    reject(err);
                }else{
                    const assigmentDAO = <CourseOutlineDao> getDAO(DAOTypes.COURSE_OUTLINE, connection);

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

    findCourseOutline(id: string): Promise<Array<CourseOutlineDto>>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const assigmentDAO = <CourseOutlineDao> getDAO(DAOTypes.COURSE_OUTLINE, connection);

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

    saveCourseOutline(assigment: CourseOutlineDto): Promise<boolean>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const assigmentDAO = <CourseOutlineDao> getDAO(DAOTypes.COURSE_OUTLINE, connection);

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

    updateCourseOutline(assigment: CourseOutlineDto): Promise<boolean>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const customerDAO = <CourseOutlineDao> getDAO(DAOTypes.COURSE_OUTLINE, connection);

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

    deleteCourseOutline(id: string): Promise<boolean>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const assigmentDAO = <CourseOutlineDao> getDAO(DAOTypes.COURSE_OUTLINE, connection);

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

    CourseOutlineCount():Promise<number>{
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if(err){
                    reject(err)
                }else {
                    const assigmentDAO=<CourseOutlineDao> getDAO(DAOTypes.COURSE_OUTLINE, connection);
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
