import { IsNotEmpty, Length } from "class-validator";
import mongoose from "mongoose";
import { Etablissement, TypeEtablissement } from "src/entity/etablissement";
import { Faculte } from "src/entity/faculte";
import { Grade } from "src/entity/grade";
import { Province } from "src/entity/province";
import { Service } from "src/entity/service";
import { Ville } from "src/entity/ville";
import { EntityTransformer } from "src/util/entity_transformer";


export class EtablissementDto implements EntityTransformer<Etablissement>{
   

    id :string;
    @IsNotEmpty()
    libelle :string;
    @IsNotEmpty()
    type: TypeEtablissement;
    @IsNotEmpty()
    code : string;
    @IsNotEmpty()
    alias : string;
    @IsNotEmpty()
    province : Province;
    ville : Ville;
   
    @IsNotEmpty()
    grades : Grade[] = [];
   
    @IsNotEmpty()
    services :Service[] = [];
   
    @IsNotEmpty()
    facultes :Faculte[] = [];

    toEntity(): Etablissement {
        let e = new Etablissement();
        
        if(this.id){
            e.id = new mongoose.Schema.Types.ObjectId(this.id);
        }
        e.libelle = this.libelle;
        e.type = this.type;
        e.code =  this.code;
        e.province =  this.province;
        e.ville = this.ville;
        e.alias = this.alias;
        e.grades = this.grades;
        e.services = this.services;
        e.facultes = this.facultes;        


        return e;
    }
    
}