import { Competence } from "./Competence";
import { Demande } from "./Demande";
import { Document } from "./Document";
import { Localite } from "./Localite";
import { Pays } from "./Pays";
import { TypeIdentification } from "./TypeIdentification";
import {Disponibilite} from "./Disponibilite"
import { Ethnies } from "./Ethnies";
import { Langue } from "./Langue";
import {Formation} from "./Formation";
import {Experience} from "./Experience";
import { Niveauetude } from "./Niveauetude";

export class Employee {
    constructor() {}
    idemploye:number;
    adresse :String;
    dateNaissance :any;
    email :String;
    identification :String;
    nom :String;
    observation :String;
    photo :any;
    prenom :String;
    religion :String;
    situationMatrimoniale :String
    telephoneFixe :number;
    telephoneMobile :number;
    competences :Competence[];
    demandes :Demande[];
    disponibilites :Disponibilite[];
    documents :Document[];
    pay :Pays;
    localite :Localite;
    typeIdentification :TypeIdentification;
    niveauetude :Niveauetude;
    ethnies :Ethnies
    experiences :Experience[];
    formations :Formation[];
    langues :Langue[];
    
}