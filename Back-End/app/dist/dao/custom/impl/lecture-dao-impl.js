"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("promise");
var LectureDAOImpl = /** @class */ (function () {
    function LectureDAOImpl(connection) {
        this.connection = connection;
    }
    LectureDAOImpl.prototype.count = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("select count(*) as count from lectures", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results[0].count);
                }
            });
        });
    };
    LectureDAOImpl.prototype.delete = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("DELETE FROM lectures WHERE aid='" + id + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    LectureDAOImpl.prototype.find = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM lectures WHERE fname='" + id + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    LectureDAOImpl.prototype.findAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM lectures", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    LectureDAOImpl.prototype.save = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("INSERT INTO lectures VALUES ('" + entity.aid + "','" + entity.fname + "','" + entity.lname + "','" + entity.position + "','" + entity.bday + "','" + entity.address + "','" + entity.phone + "','" + entity.email + "','" + entity.password + "')", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    LectureDAOImpl.prototype.update = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("UPDATE lectures SET fname = '" + entity.fname + "', lname ='" + entity.lname + "', position ='" + entity.position + "', bday ='" + entity.bday + "',address = '" + entity.address + "', phone ='" + entity.phone + "', email ='" + entity.email + "', password ='" + entity.password + "' WHERE aid='" + entity.aid + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    return LectureDAOImpl;
}());
exports.LectureDAOImpl = LectureDAOImpl;
