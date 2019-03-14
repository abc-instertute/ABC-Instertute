"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_pool_1 = require("../db/db-pool");
var dao_factore_1 = require("../dao/dao-factore");
var Promise = require("promise");
var Course_materialsBoImpl = /** @class */ (function () {
    function Course_materialsBoImpl() {
    }
    Course_materialsBoImpl.prototype.findAllCourse_materials = function () {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var assigmentDAO = dao_factore_1.getDAO(dao_factore_1.DAOTypes.COURSE_MATERIAL, connection);
                    var promise = assigmentDAO.findAll();
                    promise.then(function (assigment) {
                        resolve(assigment);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    Course_materialsBoImpl.prototype.findCourse_materials = function (id) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var assigmentDAO = dao_factore_1.getDAO(dao_factore_1.DAOTypes.COURSE_MATERIAL, connection);
                    var promise = assigmentDAO.find(id);
                    promise.then(function (assigment) {
                        resolve(assigment);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    Course_materialsBoImpl.prototype.saveCourse_materials = function (assigment) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var assigmentDAO = dao_factore_1.getDAO(dao_factore_1.DAOTypes.COURSE_MATERIAL, connection);
                    var promise = assigmentDAO.save(assigment);
                    promise.then(function (result) {
                        resolve(result);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    Course_materialsBoImpl.prototype.updateCourse_materials = function (assigment) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var customerDAO = dao_factore_1.getDAO(dao_factore_1.DAOTypes.COURSE_MATERIAL, connection);
                    var promise = customerDAO.update(assigment);
                    promise.then(function (result) {
                        resolve(result);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    Course_materialsBoImpl.prototype.deleteCourse_materials = function (id) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var assigmentDAO = dao_factore_1.getDAO(dao_factore_1.DAOTypes.COURSE_MATERIAL, connection);
                    var promise = assigmentDAO.delete(id);
                    promise.then(function (result) {
                        resolve(result);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    Course_materialsBoImpl.prototype.Course_materialsCount = function () {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var assigmentDAO = dao_factore_1.getDAO(dao_factore_1.DAOTypes.COURSE_MATERIAL, connection);
                    var promise = assigmentDAO.count();
                    promise.then(function (count) {
                        resolve(count);
                    }).catch(function (err) {
                        reject(err);
                    });
                }
            });
        });
    };
    return Course_materialsBoImpl;
}());
exports.Course_materialsBoImpl = Course_materialsBoImpl;
