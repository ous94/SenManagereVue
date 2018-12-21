import { Competence } from "./Competence";
import { Client } from "./Client";
import { Employee } from "./Employee";
import { Document } from "./Document";

export class Demande 
{
    constructor() {}
    iddemande :number;
    date :Date;
    salairePropose :number;
    salaireRetenue :number;
    services :String;
    competences :Competence[];
    client :Client;
    employees :Employee[];
    documents :Document[];

}