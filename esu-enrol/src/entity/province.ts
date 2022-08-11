import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ProvinceDocument =  Province & Document;

@Schema()
export class Province{
    @Prop({
        unique:false
    })
    code:string ;
    @Prop()
    libelle : string;
    
}

export const ProvinceSchema = SchemaFactory.createForClass(Province);