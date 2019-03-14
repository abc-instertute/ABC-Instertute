import express = require("express");
import {error} from "util";
import cors = require("cors");
import {CourseOutline} from "../../entity/courseOutline";
export interface CourseOutlineDao extends SuperDAO<CourseOutline,string>{

    count():Promise<number>
}
