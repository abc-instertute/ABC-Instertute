import express = require("express");
import {error} from "util";
import cors = require("cors");
import {Course_materials} from "../../entity/course_materials";
export interface Course_materialsDao extends SuperDAO<Course_materials,string>{

    count():Promise<number>
}
