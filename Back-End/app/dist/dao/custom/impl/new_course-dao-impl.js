"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("promise");
var NewCourseDAOImpl = /** @class */ (function () {
    function NewCourseDAOImpl(connection) {
        this.connection = connection;
    }
    NewCourseDAOImpl.prototype.count = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("select count(*) as count from new_course", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results[0].count);
                }
            });
        });
    };
    NewCourseDAOImpl.prototype.delete = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("DELETE FROM new_course WHERE id='" + id + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    NewCourseDAOImpl.prototype.find = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM new_course WHERE id='" + id + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    NewCourseDAOImpl.prototype.findAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM new_course", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    NewCourseDAOImpl.prototype.save = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("INSERT INTO new_course VALUES ('" + entity.file_upload + "','" + entity.id + "','" + entity.name + "','" + entity.free + "','" + entity.seat + "','" + entity.schedule + "','" + entity.period + "','" + entity.description + "','" + entity.outcome + "','" + entity.audience + "')", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    NewCourseDAOImpl.prototype.update = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("UPDATE new_course SET file_upload = '" + entity.file_upload + "', name ='" + entity.name + "', free ='" + entity.free + "',seat = '" + entity.seat + "', schedule ='" + entity.schedule + "', period ='" + entity.period + "', description ='" + entity.description + "', outcome ='" + entity.outcome + "' , audience ='" + entity.audience + "' WHERE aid='" + entity.id + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    return NewCourseDAOImpl;
}());
exports.NewCourseDAOImpl = NewCourseDAOImpl;
