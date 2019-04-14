"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_pool_1 = require("../db/db-pool");
var dao_factore_1 = require("../dao/dao-factore");
var Promise = require("promise");
var LoginBoImpl = /** @class */ (function () {
    function LoginBoImpl() {
    }
    LoginBoImpl.prototype.findAllLogin = function () {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var assigmentDAO = dao_factore_1.getDAO(dao_factore_1.DAOTypes.LOGIN, connection);
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
    LoginBoImpl.prototype.findLogin = function (id) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var assigmentDAO = dao_factore_1.getDAO(dao_factore_1.DAOTypes.LOGIN, connection);
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
    LoginBoImpl.prototype.saveLogin = function (assigment) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var assigmentDAO = dao_factore_1.getDAO(dao_factore_1.DAOTypes.LOGIN, connection);
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
    LoginBoImpl.prototype.deleteLogin = function (id) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var assigmentDAO = dao_factore_1.getDAO(dao_factore_1.DAOTypes.LOGIN, connection);
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
    LoginBoImpl.prototype.updateLogin = function (assigment) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var assigmentDAO = dao_factore_1.getDAO(dao_factore_1.DAOTypes.LOGIN, connection);
                    var promise = assigmentDAO.update(assigment);
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
    LoginBoImpl.prototype.loginValidation = function (assigment) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var assigmentDAO = dao_factore_1.getDAO(dao_factore_1.DAOTypes.LOGIN, connection);
                    var promise = assigmentDAO.v_login(assigment);
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
    return LoginBoImpl;
}());
exports.LoginBoImpl = LoginBoImpl;
