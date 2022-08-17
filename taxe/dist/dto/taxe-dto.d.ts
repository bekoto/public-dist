import { Agent } from "src/entity/agent";
import { CategoryPrice } from "src/entity/category";
export declare class TaxeDto {
    id: string;
    amount: number;
    matricule: string;
    category: CategoryPrice;
    agent: Agent;
    code: string;
    taxedAt: number;
    parking: any;
    qte: number;
    categorie: string;
    idCategorie: string;
    agentId: string;
    agentNoms: string;
    username: string;
    toEntity(): void;
}
