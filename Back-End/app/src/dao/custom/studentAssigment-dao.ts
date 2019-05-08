import express = require("express");
import {error} from "util";
import cors = require("cors");
import {StudentAssigment} from "../../entity/studentAssigment";

export interface StudentAssigmentDao extends SuperDAO<StudentAssigment,string>{

    count():Promise<number>
    v_One_student(entity: StudentAssigment): Promise<Array<StudentAssigment>> ;
}
