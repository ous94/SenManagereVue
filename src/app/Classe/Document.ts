import { Client } from "./Client";
import { Employee } from "./Employee";
import { Demande } from "./Demande";
import { TypesDocument} from "./TypesDocument";

export class Document
{
    constructor () {}
    iddocument :number;
    chemin :String;
    client :Client;
    employee : Employee;
    demande : Demande;
    typesDocument :TypesDocument;
    
}