import express = require("express");
import {error} from "util";
import cors = require("cors");
import {Login} from "../../entity/login";


export interface LoginDao extends SuperDAO<Login,string>{

    count():Promise<number>
    v_login(entity: Login): Promise<Array<Login>>;
}
