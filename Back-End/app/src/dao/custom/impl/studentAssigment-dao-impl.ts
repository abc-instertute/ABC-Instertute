import Promise = require("promise");
import {AssigmentDAO} from "../assigment-dao";
import {Assigment} from "../../../entity/assigment";
import {PoolConnection} from "mysql";

export class AssigmentDAOmpl implements AssigmentDAO {

    constructor(private connection: PoolConnection) {
    }


    count(): Promise<number> {
        return undefined;
    }

    delete(id: string): Promise<boolean> {
        return undefined;
    }

    find(id: string): Promise<Array<Assigment>> {
        return undefined;
    }

    findAll(): Promise<Array<Assigment>> {
        return undefined;
    }

    save(entity: Assigment): Promise<boolean> {
        return undefined;
    }

    update(entity: Assigment): Promise<boolean> {
        return undefined;
    }

}
