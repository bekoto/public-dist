import { File } from "src/entity/file";
export declare class Individu {
    id: string;
    nom: string;
    prenom: string;
    postnom: string;
    sexe: string;
    adresse: any;
    dateNaissance: Date;
    photo: File;
    signature: File;
}
