import { Employee } from "./Employee";
import { Demande } from "./Demande";
import { Client } from "./Client";
import { Contrat } from "./Contrat";

export class RechercheContrat
{
    constructor() {}
    
    employe :Employee;
	demande :Demande;
	offset :number;
	client :Client;
	contrat:Contrat;
}