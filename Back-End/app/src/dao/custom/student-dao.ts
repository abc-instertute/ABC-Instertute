import express = require("express");
import {error} from "util";
import cors = require("cors");
import {Student} from "../../entity/student";
export interface StudentDAO extends SuperDAO<Student,string>{

    count():Promise<number>
}
