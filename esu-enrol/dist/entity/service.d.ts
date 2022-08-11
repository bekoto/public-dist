import mongoose, { Document } from "mongoose";
import { Departement } from "./departement";
export declare type ServiceDocument = Service & Document;
export declare class Service {
    code: string;
    libelle: string;
    departement: Departement[];
}
export declare const ServiceSchema: mongoose.Schema<Service, mongoose.Model<Service, any, any, any, any>, {}, {}, {}, {}, "type", Service>;
