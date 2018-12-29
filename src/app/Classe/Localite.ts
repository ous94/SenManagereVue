import { Client } from "./Client";
import { Employee } from "./Employee";

export class Localite
{
    constructor() {}
    idlocalite :number;
    nom :string;
    clients :Client[];
    employees :Employee[];
}