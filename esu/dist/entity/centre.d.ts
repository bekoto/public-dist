import mongoose, { Document } from "mongoose";
import { Province } from "./province";
export declare type centreDocument = Centre & Document;
export declare class Centre {
    id: mongoose.Schema.Types.ObjectId;
    code: string;
    libelle: string;
    province: Province;
}
export declare const centreSchema: mongoose.Schema<Centre, mongoose.Model<Centre, any, any, any, any>, {}, {}, {}, {}, "type", Centre>;
