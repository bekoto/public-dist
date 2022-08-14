import { Centre } from "src/entity/centre";
import { EntityTransformer } from "src/util/entity_transformer";
export declare class CentreDto implements EntityTransformer<Centre> {
    toEntity(): Centre;
    id: string;
    code: string;
    libelle: string;
    idProvince: string;
}
