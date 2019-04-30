"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("promise");
var Log_sessionDaoImpl = /** @class */ (function () {
    function Log_sessionDaoImpl(connection) {
        this.connection = connection;
    }
    Log_sessionDaoImpl.prototype.delete = function (email) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("DELETE FROM Log_session WHERE email='" + email + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    Log_sessionDaoImpl.prototype.findAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM Log_session ", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    Log_sessionDaoImpl.prototype.save = function (l) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("INSERT INTO Log_session VALUES ('" + l.id + "','" + l.email + "')", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    return Log_sessionDaoImpl;
}());
exports.Log_sessionDaoImpl = Log_sessionDaoImpl;
