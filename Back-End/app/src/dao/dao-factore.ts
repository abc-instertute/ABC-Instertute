import {PoolConnection} from "mysql";
import {NewCourseDAOImpl}from "./custom/impl/new_course-dao-impl";
import {AssigmentDAOImpl}from "./custom/impl/assigment-dao-impl";
import {StudentAssigmentDAOImpl}from "./custom/impl/studentAssigment-dao-impl";
import {Course_materialDAOImpl}from "./custom/impl/course_materials-dao-impl";
import {LectureDAOImpl}from "./custom/impl/lecture-dao-impl";
import {StudentDAOImpl}from "./custom/impl/student-dao-impl";
import {CourseRegistrationDAOImpl}from "./custom/impl/courseRegistration-dao-impl";
import {LoginDAOImpl}from "./custom/impl/login-dao-impl";
import {Log_sessionDaoImpl} from "./custom/impl/log_session-dao-impl";

export enum DAOTypes {
    COURSE, COURSE_MATERIAL, ASSIGMENT, LECTURE, STUDENT, STUDENT_ASSIGMENT, COURSE_REGISTRATION,LOGIN,LOG_SESSION
}
export function getDAO(daoType: DAOTypes, connection:PoolConnection) {

    switch (daoType) {
        case  DAOTypes.COURSE:
            return new NewCourseDAOImpl(connection);
        case  DAOTypes.COURSE_MATERIAL:
            return new Course_materialDAOImpl(connection);
        case  DAOTypes.ASSIGMENT:
            return new AssigmentDAOImpl(connection);
        case  DAOTypes.LECTURE:
            return new LectureDAOImpl(connection);
        case  DAOTypes.STUDENT:
            return new StudentDAOImpl(connection);
        case  DAOTypes.STUDENT_ASSIGMENT:
            return new StudentAssigmentDAOImpl(connection);
        case DAOTypes.COURSE_REGISTRATION:
            return new CourseRegistrationDAOImpl(connection);
        case DAOTypes.LOGIN:
            return new LoginDAOImpl(connection);
        case DAOTypes.LOG_SESSION:
            return new Log_sessionDaoImpl(connection);
        default:
            return null;
    }

}
