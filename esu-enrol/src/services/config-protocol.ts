import { Observable, Subject } from "rxjs";
import { Etablissement } from "src/entity/etablissement";
import { EtablissementDto } from "src/model/etablissement-dto";
import {Centre} from 'src/entity/centre';
import { CentreDto } from "src/dto/centre.dto";



export interface IConfigService{

    addEtablissement(data : EtablissementDto) : Subject<Etablissement>;
    getEtablissements() : Observable<Etablissement[]>;
    getEtablissement(id : string) : Subject<Etablissement>;
    getEtablissementByCode(code :string):Subject<Etablissement>;
    addFaculte();
    addCenter(data : CentreDto): Subject<Centre>;
    editCenter(idcentre:string, data:CentreDto, doneBy:string):Subject<Centre>;
    
}
