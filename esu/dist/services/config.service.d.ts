import { Model } from 'mongoose';
import { Subject, Observable } from 'rxjs';
import { CentreDto } from 'src/dto/centre.dto';
import { Centre } from 'src/entity/centre';
import { Etablissement, EtablissementDocument } from 'src/entity/etablissement';
import { EtablissementDto } from 'src/model/etablissement-dto';
import { IConfigService } from './config-protocol';
export declare class ConfigService implements IConfigService {
    private readonly etablissementModel;
    constructor(etablissementModel: Model<EtablissementDocument>);
    addCenter(data: CentreDto): Subject<Centre>;
    editCenter(idcentre: string, data: CentreDto, doneBy: string): Subject<Centre>;
    getEtablissementByCode(code: string): Subject<Etablissement>;
    addEtablissement(data: EtablissementDto): Subject<Etablissement>;
    getEtablissements(): Observable<Etablissement[]>;
    getEtablissement(code: string): Subject<Etablissement>;
    addFaculte(): void;
}
