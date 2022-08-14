import { Observable, Subject } from 'rxjs';
import { CentreDto } from 'src/dto/centre.dto';
import { Province } from 'src/entity/province';
import { EtablissementDto } from 'src/model/etablissement-dto';
import { ConfigService } from 'src/services/config.service';
export declare class ConfigController {
    private readonly configService;
    constructor(configService: ConfigService);
    addEtablissement(data: EtablissementDto): Subject<import("../entity/etablissement").Etablissement>;
    getEtablissements(): Observable<import("../entity/etablissement").Etablissement[]>;
    getEtablissement(id: string): Subject<import("../entity/etablissement").Etablissement>;
    getEtablissementBycode(code: string): Subject<import("../entity/etablissement").Etablissement>;
    getFacOfEtablissements(codeEtablissement: string, codeFac: string): Subject<import("../entity/faculte").Faculte>;
    addCentre(data: CentreDto): Subject<import("../entity/centre").Centre>;
    getCentres(): Observable<import("../entity/centre").Centre[]>;
    addProvince(data: Province): Subject<Province>;
    getProvinces(): Observable<Province[]>;
    getProvince(idprovince: string): Observable<Province[]>;
}
