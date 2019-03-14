"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("promise");
var AssigmentDAOImpl = /** @class */ (function () {
    function AssigmentDAOImpl(connection) {
        this.connection = connection;
    }
    AssigmentDAOImpl.prototype.count = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("select count(*) as count from assigment", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results[0].count);
                }
            });
        });
    };
    AssigmentDAOImpl.prototype.delete = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("DELETE FROM assigment WHERE aid='" + id + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    AssigmentDAOImpl.prototype.find = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM assigment WHERE aid='" + id + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    AssigmentDAOImpl.prototype.findAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM assigment", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    AssigmentDAOImpl.prototype.save = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("INSERT INTO assigment VALUES ('" + entity.aid + "','" + entity.cid + "','" + entity.aname + "','" + entity.description + "','" + entity.duedate + "')", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    AssigmentDAOImpl.prototype.update = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("UPDATE assigment SET cid = '" + entity.cid + "', aname ='" + entity.aname + "', description ='" + entity.description + "', duedate ='" + entity.duedate + "' WHERE aid='" + entity.aid + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    return AssigmentDAOImpl;
}());
exports.AssigmentDAOImpl = AssigmentDAOImpl;
