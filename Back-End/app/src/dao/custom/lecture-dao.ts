import express = require("express");
import {error} from "util";
import cors = require("cors");
import {Lectures} from "../../entity/lectures";
export interface LectureDao extends SuperDAO<Lectures,string>{

    count():Promise<number>
}
