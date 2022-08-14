import { Province } from "./province";
import { Grade } from './grade';
import { Faculte } from './faculte';
import { Service } from './service';
import { Ville } from "./ville";
import mongoose from "mongoose";
import { Etudiant } from "./etudiant";
export declare type EtablissementDocument = Etablissement & Document;
export declare class Etablissement {
    id: mongoose.Schema.Types.ObjectId;
    libelle: string;
    alias: string;
    type: TypeEtablissement;
    code: string;
    province: Province;
    ville: Ville;
    grades: Grade[];
    services: Service[];
    facultes: Faculte[];
    etudiants: Etudiant[];
}
export declare enum TypeEtablissement {
    UNIVERTIY = "UNIVERSITY",
    INSTITUTE = "INSTITUTE",
    TRAINING = "TRAINING"
}
export declare const EtablissementSchema: mongoose.Schema<Etablissement, mongoose.Model<Etablissement, any, any, any, any>, {}, {}, {}, {}, "type", Etablissement>;
