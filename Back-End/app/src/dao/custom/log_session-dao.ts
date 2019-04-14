import express = require("express");
import {error} from "util";
import cors = require("cors");
import {Log_session} from "../../entity/log_session";

export interface Log_sessionDao{
    save(l: Log_session): Promise<boolean>;
    delete(id: string): Promise<boolean>;
    findAll(): Promise<Array<Log_session>>;
}
