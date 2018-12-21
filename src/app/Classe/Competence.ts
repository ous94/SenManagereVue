import { Demande } from "./Demande";
import { Employee } from "./Employee";

export class Competence {
    constructor() {}
    idcompetence: number;
    description:string;
    demandes :Demande[];
    employees:Employee[];

}