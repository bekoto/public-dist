import { Model } from 'mongoose';
import { Subject, Observable } from 'rxjs';
import { CentreDto } from 'src/dto/centre.dto';
import { Centre, centreDocument } from 'src/entity/centre';
import { Etablissement, EtablissementDocument } from 'src/entity/etablissement';
import { Faculte } from 'src/entity/faculte';
import { Province, ProvinceDocument } from 'src/entity/province';
import { EtablissementDto } from 'src/model/etablissement-dto';
import { IConfigService } from './config-protocol';
export declare class ConfigService implements IConfigService {
    private readonly etablissementModel;
    private readonly centreModel;
    private provinceModel;
    constructor(etablissementModel: Model<EtablissementDocument>, centreModel: Model<centreDocument>, provinceModel: Model<ProvinceDocument>);
    addProvince(data: Province): Subject<Province>;
    getProvince(idprovince: string): Subject<Province>;
    getProvinces(): Observable<Province[]>;
    getCentre(idcentre: string): Subject<Centre>;
    getFaculteOfEtablissement(codeFac: string, codeEtablissement: any): Subject<Faculte>;
    addFaculteToEtablissement(data: Faculte, codeEtablissement: any): Subject<Faculte>;
    getCenters(): Observable<Centre[]>;
    addCenter(data: CentreDto): Subject<Centre>;
    editCenter(idcentre: string, data: CentreDto, doneBy: string): Subject<Centre>;
    getEtablissementByCode(code: string): Subject<Etablissement>;
    addEtablissement(data: EtablissementDto): Subject<Etablissement>;
    getEtablissements(): Observable<Etablissement[]>;
    getEtablissement(code: string): Subject<Etablissement>;
    addFaculte(): void;
}
