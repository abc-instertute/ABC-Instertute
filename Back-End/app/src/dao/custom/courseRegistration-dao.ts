import express = require("express");
import {error} from "util";
import cors = require("cors");
import {CourseRegistration} from "../../entity/courseRegistration";


export interface CourseRegistrationDao extends SuperDAO<CourseRegistration,string>{

    count():Promise<number>
}
