import { Agent } from "src/entity/agent";
import { EntityTransformer } from "src/util/entity_transformer";
export declare class AgentDto implements EntityTransformer<Agent> {
    id: string;
    nom: string;
    email: string;
    phone: string;
    prenom: string;
    dateNaissance: number;
    idCategorie: string;
    code: string;
    idCentre: string;
    idEtabilissement: string;
    username: string;
    app: string;
    toEntity(): Agent;
}
