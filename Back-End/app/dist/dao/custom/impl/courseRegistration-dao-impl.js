"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("promise");
var CourseRegistrationDAOImpl = /** @class */ (function () {
    function CourseRegistrationDAOImpl(connection) {
        this.connection = connection;
    }
    CourseRegistrationDAOImpl.prototype.count = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("select count(*) as count from CourseRegistration", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results[0].count);
                }
            });
        });
    };
    CourseRegistrationDAOImpl.prototype.findAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM CourseRegistration", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    CourseRegistrationDAOImpl.prototype.save = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("INSERT INTO CourseRegistration VALUES ('" + entity.sid + "','" + entity.cid + "','" + entity.position + "')", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    CourseRegistrationDAOImpl.prototype.update = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("UPDATE CourseRegistration SET cid = '" + entity.cid + "' WHERE sid='" + entity.sid + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    CourseRegistrationDAOImpl.prototype.delete = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("DELETE FROM CourseRegistration WHERE cid='" + id + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    CourseRegistrationDAOImpl.prototype.find = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM CourseRegistration WHERE sid='" + id + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    return CourseRegistrationDAOImpl;
}());
exports.CourseRegistrationDAOImpl = CourseRegistrationDAOImpl;
