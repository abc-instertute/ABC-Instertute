import express = require("express");
import {error} from "util";
import cors = require("cors");
import {New_course} from "../../entity/new_course";
export interface New_courseDao extends SuperDAO<New_course,string>{

    count():Promise<number>
}
