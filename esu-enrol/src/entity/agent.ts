import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { Individu } from "src/model/individu";
import { Centre } from "./centre";
import { Etablissement } from "./etablissement";
import {User} from 'src/model/user';
export type AgentDocument = Agent & Document;

@Schema()
export class Agent{
    @Prop({
        _id : true,
        auto : true
    })
    id : mongoose.Schema.Types.ObjectId;
    @Prop({
        unique : true
    })
    code :string;
    @Prop()
    nom:string;
    @Prop({
        type : mongoose.Schema.Types.ObjectId, ref : "Centre"
    })
    centre:Centre;
    @Prop({
        type : mongoose.Schema.Types.ObjectId, ref :"Etablissement"
    })
    etablissement : Etablissement;
    @Prop()
    individu : Individu;
    @Prop()
    penom :string;
    @Prop()
    dateNaissance:Date;
    @Prop()
    user:User;
    

}

export const AgentSchema = SchemaFactory.createForClass(Agent);



