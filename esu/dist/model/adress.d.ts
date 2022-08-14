import { Commune } from "src/entity/commune";
import { Secteur } from "src/entity/secteur";
export declare class Adresse {
    num: string;
    avenue: string;
    quartier: string;
    commune: Commune;
    secteur: Secteur;
}
