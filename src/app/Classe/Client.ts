import { Pays } from "./Pays";
import {Localite} from "./Localite";
import { TypeIdentification } from "./TypeIdentification";
import {Demande} from "./Demande";
import {Document} from "./Document";

export class Client
{
    constructor() {}
    idclient:number;
    adresse :String;
    email :String;
    identification :String;
    nom :String;
    observation :String;
    prenom :String;
    sexe :String;
    telephoneFixe :String;
    telephoneMobile :String;
    pay :Pays;
    localite :Localite;
    typeIdentification :TypeIdentification;
    demandes :Demande[];
    documents :Document[];
    login :String;
    password :String;

}