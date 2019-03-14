import {PoolConnection} from "mysql";
import {NewCourseDAOImpl}from "./custom/impl/new_course-dao-impl";
import {AssigmentDAOImpl}from "./custom/impl/assigment-dao-impl";
import {StudentAssigmentDAOImpl}from "./custom/impl/studentAssigment-dao-impl";
import {Course_materialDAOImpl}from "./custom/impl/course_materials-dao-impl";
import {CourseOutlineDAOImpl}from "./custom/impl/courseOutline-dao-impl";
import {LectureDAOImpl}from "./custom/impl/lecture-dao-impl";
import {StudentDAOImpl}from "./custom/impl/student-dao-impl";
export enum DAOTypes {
    COURSE, COURSE_MATERIAL, ASSIGMENT, LECTURE, STUDENT, COURSE_OUTLINE, STUDENT_ASSIGMENT
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
        case  DAOTypes.COURSE_OUTLINE:
            return new CourseOutlineDAOImpl(connection);
        case  DAOTypes.STUDENT_ASSIGMENT:
            return new StudentAssigmentDAOImpl(connection);
        default:
            return null;
    }

}
