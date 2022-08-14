import { Etudiant } from "src/entity/etudiant";
import { Adresse } from "src/model/adress";
import { Individu } from "src/model/individu";
import { EntityTransformer } from "src/util/entity_transformer";
import { FileDto } from "./file_dto";
export declare class EtudiantDto implements EntityTransformer<Etudiant> {
    matricule: string;
    nom: string;
    prenom: string;
    postnom: string;
    promotion: string;
    orientation: any;
    idfiliere: string;
    departement: string;
    sexe: string;
    dateNaissance: number;
    lieuNaissance: any;
    adresse: Adresse;
    createdAt: number;
    createdBy: string;
    photo: FileDto;
    individu: Individu;
    tel: string;
    email: string;
    sync: boolean;
    syncData: boolean;
    toEntity(): Etudiant;
}
