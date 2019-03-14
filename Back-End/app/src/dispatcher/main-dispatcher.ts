import express = require("express");
import cors = require("cors");

import assigmentDispatcher from "./assigment-dispatcher";
import courseMaterialsDispatcher from "./course_materials-dispatcher";
import courseOutlineDispatcher from "./courseOutline-dispatcher";
import lectureDispatcher from "./lecture-dispatcher";
import newCourseDispatcher from "./new_course-dispatcher";
import studentDispatcher from "./student-dispatcher";
import studentAssigmentDispatcher from "./studentAssigment-dispatcher";

const mainDespatcher = express.Router();
mainDespatcher.use(express.json());
mainDespatcher.use(cors());

mainDespatcher.use('/api/v1/assigments',assigmentDispatcher);
mainDespatcher.use('/api/v1/courseMaterials',courseMaterialsDispatcher);
mainDespatcher.use('/api/v1/newCourses',courseOutlineDispatcher);
mainDespatcher.use('/api/v1/lectures',lectureDispatcher);
mainDespatcher.use('/api/v1/newCourses',newCourseDispatcher);
mainDespatcher.use('/api/v1/students',studentDispatcher);
mainDespatcher.use('/api/v1/studentAssigments',studentAssigmentDispatcher);

export default mainDespatcher;
