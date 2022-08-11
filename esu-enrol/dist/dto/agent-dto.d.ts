import { Agent } from "src/entity/agent";
import { EntityTransformer } from "src/util/entity_transformer";
export declare class AgentDto implements EntityTransformer<Agent> {
    id: string;
    nom: string;
    prenom: string;
    dateNaissance: number;
    code: string;
    idCentre: string;
    idEtabilissement: string;
    username: string;
    toEntity(): Agent;
}
