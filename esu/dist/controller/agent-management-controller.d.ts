import { Subject } from "rxjs";
import { AgentDto } from "src/dto/agent-dto";
import { Agent } from "src/entity/agent";
import { AgentManagementService } from "src/services/agent-manager-service";
export declare class AgentManagementController {
    private agentMan;
    constructor(agentMan: AgentManagementService);
    addAgent(data: AgentDto, token: string, tokenb: string): Subject<Agent>;
    editAgent(id: string, data: AgentDto, doneBye: string): Subject<Agent>;
    getAgent(id: string): Subject<Agent>;
    getAgents(): Subject<Agent[]>;
    getAgentByUsername(username: string): Subject<Agent>;
    getAgentByCode(code: string): Subject<Agent>;
}
