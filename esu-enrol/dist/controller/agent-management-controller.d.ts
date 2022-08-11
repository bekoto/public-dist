import { Subject } from "rxjs";
import { AgentDto } from "src/dto/agent-dto";
import { Agent } from "src/entity/agent";
import { AgentManagement, AgentManagementService } from "src/services/agent-manager-service";
export declare class AgentManagementController implements AgentManagement {
    private agentMan;
    constructor(agentMan: AgentManagementService);
    addAgent(data: AgentDto): Subject<Agent>;
    editAgent(id: string, data: AgentDto, doneBye: string): Subject<Agent>;
    getAgent(id: string): Subject<Agent>;
    getAgents(): Subject<Agent[]>;
    getAgentByUsername(username: string): Subject<Agent>;
    getAgentByCode(code: string): Subject<Agent>;
}
