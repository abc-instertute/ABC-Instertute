import express = require("express");
import {error} from "util";
import cors = require("cors");
import {Assigment} from "../../entity/assigment";
export interface AssigmentDAO extends SuperDAO<Assigment,string>{

    count():Promise<number>
}
