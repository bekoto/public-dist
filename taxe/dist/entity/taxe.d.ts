import mongoose from "mongoose";
import { Agent } from "./agent";
import { CategoryPrice } from "./category";
import { Parking } from "./parking";
export declare type TaxeDocument = Taxe & Document;
export declare class Taxe {
    id: string;
    amount: number;
    matricule: string;
    category: CategoryPrice;
    agent: Agent;
    code: string;
    taxedAt: Date;
    syncedAt: Date;
    parking: Parking;
    qte: number;
    categorie: string;
    idCategorie: string;
    agentId: string;
    agentNoms: string;
    username: string;
}
export declare const TaxeSchema: mongoose.Schema<Taxe, mongoose.Model<Taxe, any, any, any, any>, {}, {}, {}, {}, "type", Taxe>;
