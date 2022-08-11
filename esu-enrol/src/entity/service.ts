import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { Departement } from "./departement";


export type ServiceDocument = Service & Document;

@Schema()
export class Service{
    @Prop({
        unique : true
    })
    code :string;
    @Prop()
    libelle:string;
    @Prop({
    })
    departement : Departement[];
}

export const ServiceSchema = SchemaFactory.createForClass(Service);