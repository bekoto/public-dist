import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import { Province } from "./province";
import {Grade} from './grade';
import {Fonction} from './fonction';
import {Faculte} from './faculte';
import {Service} from './service';
import { Ville } from "./ville";
import mongoose, { trusted } from "mongoose";
export type EtablissementDocument =  Etablissement & Document;


@Schema()
export class Etablissement{
    @Prop({
        auto : true
    })
    id : mongoose.Schema.Types.ObjectId;
    @Prop({
        unique : true
    })
    libelle :string;
    @Prop()
    alias : string;
    @Prop()
    type: TypeEtablissement;
    @Prop({
        unique : trusted
    })
    code : string;
    @Prop()
    province : Province;
    @Prop()
    ville : Ville;
    @Prop()
    grades : Grade[] = [];
    @Prop()
    services :Service[] = [];
    @Prop()
    facultes :Faculte[] = [];
    
}

export enum TypeEtablissement{
    UNIVERTIY ="UNIVERSITY", INSTITUTE="INSTITUTE", TRAINING="TRAINING", 

}

export const EtablissementSchema = SchemaFactory.createForClass(Etablissement);