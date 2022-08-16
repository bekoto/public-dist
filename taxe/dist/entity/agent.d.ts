import mongoose, { Document } from "mongoose";
import { Parking } from "./parking";
import { User } from "./user";
export declare type AgentDocument = Agent & Document;
export declare class Agent {
    code: string;
    phone: string;
    nom: string;
    prenom: string;
    parking: Parking;
    user: User;
    email: string;
    app: string;
    idCategorie: string;
}
export declare const AgentSchema: mongoose.Schema<Agent, mongoose.Model<Agent, any, any, any, any>, {}, {}, {}, {}, "type", Agent>;
