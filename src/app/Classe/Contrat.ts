import { Demande } from "./Demande";
import { Employee } from "./Employee";

export class Contrat
{
    constructor(){}

     idContrat :number;
	 debut :Date;
	 fin :Date;
	 salaire :number;
	 demande : Demande;
	 employee :Employee;
}