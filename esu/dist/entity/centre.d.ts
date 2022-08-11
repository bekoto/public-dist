import mongoose, { Document } from "mongoose";
export declare type centreDocument = Centre & Document;
export declare class Centre {
    id: mongoose.Types.ObjectId;
    code: string;
    libelle: string;
}
export declare const centreSchema: mongoose.Schema<Centre, mongoose.Model<Centre, any, any, any, any>, {}, {}, {}, {}, "type", Centre>;
