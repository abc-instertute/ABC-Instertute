"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("promise");
var StudentDAOImpl = /** @class */ (function () {
    function StudentDAOImpl(connection) {
        this.connection = connection;
    }
    StudentDAOImpl.prototype.count = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("select count(*) as count from student", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results[0].count);
                }
            });
        });
    };
    StudentDAOImpl.prototype.delete = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("DELETE FROM student WHERE sid='" + id + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    StudentDAOImpl.prototype.find = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM student WHERE sid='" + id + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    StudentDAOImpl.prototype.findAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM student", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    StudentDAOImpl.prototype.save = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("INSERT INTO student VALUES ('" + entity.sid + "','" + entity.fname + "','" + entity.lname + "','" + entity.bday + "','" + entity.address + "','" + entity.phone + "','" + entity.email + "','" + entity.password + "')", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    StudentDAOImpl.prototype.update = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("UPDATE student SET fname = '" + entity.fname + "', lname ='" + entity.lname + "', bday ='" + entity.bday + "',address = '" + entity.address + "', phone ='" + entity.phone + "', email ='" + entity.email + "', password ='" + entity.password + "' WHERE sid='" + entity.sid + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    return StudentDAOImpl;
}());
exports.StudentDAOImpl = StudentDAOImpl;
