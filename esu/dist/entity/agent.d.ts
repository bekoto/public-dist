import mongoose, { Document } from "mongoose";
import { Individu } from "src/model/individu";
import { Centre } from "./centre";
import { Etablissement } from "./etablissement";
import { User } from 'src/model/user';
export declare type AgentDocument = Agent & Document;
export declare class Agent {
    id: mongoose.Schema.Types.ObjectId;
    code: string;
    nom: string;
    centre: Centre;
    etablissement: Etablissement;
    individu: Individu;
    penom: string;
    dateNaissance: Date;
    user: User;
}
export declare const AgentSchema: mongoose.Schema<Agent, mongoose.Model<Agent, any, any, any, any>, {}, {}, {}, {}, "type", Agent>;
