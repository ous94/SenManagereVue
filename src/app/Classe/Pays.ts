import {Client} from "./Client";
import {Employee} from "./Employee";

export class Pays {
    constructor() {}
    idpays: number;
    nom:string;
    clients :Client[];
    employees:Employee[];

}