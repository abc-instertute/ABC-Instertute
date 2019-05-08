"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("promise");
var StudentAssigmentDAOImpl = /** @class */ (function () {
    function StudentAssigmentDAOImpl(connection) {
        this.connection = connection;
    }
    StudentAssigmentDAOImpl.prototype.count = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("select count(*) as count from studentassigment", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results[0].count);
                }
            });
        });
    };
    StudentAssigmentDAOImpl.prototype.delete = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("DELETE FROM studentassigment WHERE aid='" + id + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    StudentAssigmentDAOImpl.prototype.find = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM studentassigment WHERE aid='" + id + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    StudentAssigmentDAOImpl.prototype.findAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM studentassigment", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    StudentAssigmentDAOImpl.prototype.save = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("INSERT INTO studentassigment VALUES ('" + entity.aid + "','" + entity.systemDate + "','" + entity.sid + "','" + entity.cid + "','" + entity.file_upload + "')", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    StudentAssigmentDAOImpl.prototype.update = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("UPDATE studentassigment SET  systemDate ='" + entity.systemDate + "', sid ='" + entity.sid + "',cid = '" + entity.cid + "',file_upload = '" + entity.file_upload + "' WHERE aid='" + entity.aid + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    StudentAssigmentDAOImpl.prototype.v_One_student = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM StudentAssigment WHERE aid='" + entity.aid + "' and  cid ='" + entity.cid + "' and sid ='" + entity.sid + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    return StudentAssigmentDAOImpl;
}());
exports.StudentAssigmentDAOImpl = StudentAssigmentDAOImpl;
