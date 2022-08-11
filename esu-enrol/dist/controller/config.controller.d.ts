import { EtablissementDto } from 'src/model/etablissement-dto';
import { ConfigService } from 'src/services/config.service';
export declare class ConfigController {
    private readonly configService;
    constructor(configService: ConfigService);
    addEtablissement(data: EtablissementDto): import("rxjs").Subject<import("../entity/etablissement").Etablissement>;
    getEtablissements(): import("rxjs").Observable<import("../entity/etablissement").Etablissement[]>;
}
