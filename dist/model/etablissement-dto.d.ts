import { Etablissement, TypeEtablissement } from "src/entity/etablissement";
import { Faculte } from "src/entity/faculte";
import { Grade } from "src/entity/grade";
import { Province } from "src/entity/province";
import { Service } from "src/entity/service";
import { Ville } from "src/entity/ville";
import { EntityTransformer } from "src/util/entity_transformer";
export declare class EtablissementDto implements EntityTransformer<Etablissement> {
    id: string;
    libelle: string;
    type: TypeEtablissement;
    code: string;
    alias: string;
    province: Province;
    ville: Ville;
    grades: Grade[];
    services: Service[];
    facultes: Faculte[];
    toEntity(): Etablissement;
}
