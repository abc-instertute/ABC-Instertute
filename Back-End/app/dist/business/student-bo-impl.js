"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_pool_1 = require("../db/db-pool");
var dao_factore_1 = require("../dao/dao-factore");
var Promise = require("promise");
var StudentBoImpl = /** @class */ (function () {
    function StudentBoImpl() {
    }
    StudentBoImpl.prototype.findAllStudent = function () {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var assigmentDAO = dao_factore_1.getDAO(dao_factore_1.DAOTypes.STUDENT, connection);
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
    StudentBoImpl.prototype.findStudent = function (id) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var assigmentDAO = dao_factore_1.getDAO(dao_factore_1.DAOTypes.STUDENT, connection);
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
    StudentBoImpl.prototype.saveStudent = function (assigment) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var assigmentDAO = dao_factore_1.getDAO(dao_factore_1.DAOTypes.STUDENT, connection);
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
    StudentBoImpl.prototype.updateStudent = function (assigment) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var customerDAO = dao_factore_1.getDAO(dao_factore_1.DAOTypes.STUDENT, connection);
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
    StudentBoImpl.prototype.deleteStudent = function (id) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var assigmentDAO = dao_factore_1.getDAO(dao_factore_1.DAOTypes.STUDENT, connection);
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
    StudentBoImpl.prototype.StudentCount = function () {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var assigmentDAO = dao_factore_1.getDAO(dao_factore_1.DAOTypes.STUDENT, connection);
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
    return StudentBoImpl;
}());
exports.StudentBoImpl = StudentBoImpl;
