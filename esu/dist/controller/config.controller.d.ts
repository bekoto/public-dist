import { CentreDto } from 'src/dto/centre.dto';
import { EtablissementDto } from 'src/model/etablissement-dto';
import { ConfigService } from 'src/services/config.service';
export declare class ConfigController {
    private readonly configService;
    constructor(configService: ConfigService);
    addEtablissement(data: EtablissementDto): import("rxjs").Subject<import("../entity/etablissement").Etablissement>;
    getEtablissements(): import("rxjs").Observable<import("../entity/etablissement").Etablissement[]>;
    getFacOfEtablissements(codeEtablissement: string, codeFac: string): import("rxjs").Subject<import("../entity/faculte").Faculte>;
    addCentre(data: CentreDto): import("rxjs").Subject<import("../entity/centre").Centre>;
    getCentres(): import("rxjs").Observable<import("../entity/centre").Centre[]>;
}
