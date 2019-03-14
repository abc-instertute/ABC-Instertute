"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_pool_1 = require("../db/db-pool");
var dao_factore_1 = require("../dao/dao-factore");
var Promise = require("promise");
var CourseOutlineBoImpl = /** @class */ (function () {
    function CourseOutlineBoImpl() {
    }
    CourseOutlineBoImpl.prototype.findAllCourseOutline = function () {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var assigmentDAO = dao_factore_1.getDAO(dao_factore_1.DAOTypes.COURSE_OUTLINE, connection);
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
    CourseOutlineBoImpl.prototype.findCourseOutline = function (id) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var assigmentDAO = dao_factore_1.getDAO(dao_factore_1.DAOTypes.COURSE_OUTLINE, connection);
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
    CourseOutlineBoImpl.prototype.saveCourseOutline = function (assigment) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var assigmentDAO = dao_factore_1.getDAO(dao_factore_1.DAOTypes.COURSE_OUTLINE, connection);
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
    CourseOutlineBoImpl.prototype.updateCourseOutline = function (assigment) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var customerDAO = dao_factore_1.getDAO(dao_factore_1.DAOTypes.COURSE_OUTLINE, connection);
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
    CourseOutlineBoImpl.prototype.deleteCourseOutline = function (id) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var assigmentDAO = dao_factore_1.getDAO(dao_factore_1.DAOTypes.COURSE_OUTLINE, connection);
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
    CourseOutlineBoImpl.prototype.CourseOutlineCount = function () {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var assigmentDAO = dao_factore_1.getDAO(dao_factore_1.DAOTypes.COURSE_OUTLINE, connection);
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
    return CourseOutlineBoImpl;
}());
exports.CourseOutlineBoImpl = CourseOutlineBoImpl;
