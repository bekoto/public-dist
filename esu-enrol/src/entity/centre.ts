import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";

export type centreDocument = Centre & Document;

@Schema()
export class Centre{
    @Prop({
        auto:true,
        _id : true
    })
    id:mongoose.Types.ObjectId;
    @Prop({unique:true})
    code :string;
    @Prop()
    libelle:string;

}

export const centreSchema = SchemaFactory.createForClass(Centre);
