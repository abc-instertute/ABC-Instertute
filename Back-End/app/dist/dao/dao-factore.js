"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var new_course_dao_impl_1 = require("./custom/impl/new_course-dao-impl");
var assigment_dao_impl_1 = require("./custom/impl/assigment-dao-impl");
var studentAssigment_dao_impl_1 = require("./custom/impl/studentAssigment-dao-impl");
var course_materials_dao_impl_1 = require("./custom/impl/course_materials-dao-impl");
var lecture_dao_impl_1 = require("./custom/impl/lecture-dao-impl");
var student_dao_impl_1 = require("./custom/impl/student-dao-impl");
var courseRegistration_dao_impl_1 = require("./custom/impl/courseRegistration-dao-impl");
var login_dao_impl_1 = require("./custom/impl/login-dao-impl");
var log_session_dao_impl_1 = require("./custom/impl/log_session-dao-impl");
var DAOTypes;
(function (DAOTypes) {
    DAOTypes[DAOTypes["COURSE"] = 0] = "COURSE";
    DAOTypes[DAOTypes["COURSE_MATERIAL"] = 1] = "COURSE_MATERIAL";
    DAOTypes[DAOTypes["ASSIGMENT"] = 2] = "ASSIGMENT";
    DAOTypes[DAOTypes["LECTURE"] = 3] = "LECTURE";
    DAOTypes[DAOTypes["STUDENT"] = 4] = "STUDENT";
    DAOTypes[DAOTypes["STUDENT_ASSIGMENT"] = 5] = "STUDENT_ASSIGMENT";
    DAOTypes[DAOTypes["COURSE_REGISTRATION"] = 6] = "COURSE_REGISTRATION";
    DAOTypes[DAOTypes["LOGIN"] = 7] = "LOGIN";
    DAOTypes[DAOTypes["LOG_SESSION"] = 8] = "LOG_SESSION";
})(DAOTypes = exports.DAOTypes || (exports.DAOTypes = {}));
function getDAO(daoType, connection) {
    switch (daoType) {
        case DAOTypes.COURSE:
            return new new_course_dao_impl_1.NewCourseDAOImpl(connection);
        case DAOTypes.COURSE_MATERIAL:
            return new course_materials_dao_impl_1.Course_materialDAOImpl(connection);
        case DAOTypes.ASSIGMENT:
            return new assigment_dao_impl_1.AssigmentDAOImpl(connection);
        case DAOTypes.LECTURE:
            return new lecture_dao_impl_1.LectureDAOImpl(connection);
        case DAOTypes.STUDENT:
            return new student_dao_impl_1.StudentDAOImpl(connection);
        case DAOTypes.STUDENT_ASSIGMENT:
            return new studentAssigment_dao_impl_1.StudentAssigmentDAOImpl(connection);
        case DAOTypes.COURSE_REGISTRATION:
            return new courseRegistration_dao_impl_1.CourseRegistrationDAOImpl(connection);
        case DAOTypes.LOGIN:
            return new login_dao_impl_1.LoginDAOImpl(connection);
        case DAOTypes.LOG_SESSION:
            return new log_session_dao_impl_1.Log_sessionDaoImpl(connection);
        default:
            return null;
    }
}
exports.getDAO = getDAO;
