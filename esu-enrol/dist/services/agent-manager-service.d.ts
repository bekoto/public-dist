import { Agent, AgentDocument } from 'src/entity/agent';
import { AgentDto } from 'src/dto/agent-dto';
import { Model } from 'mongoose';
import { Subject } from 'rxjs';
import { EtablissementDocument } from 'src/entity/etablissement';
import { ConfigService } from './config.service';
export declare class AgentManagementService implements AgentManagement {
    private readonly agentModel;
    private readonly etablissementModel;
    private readonly configServ;
    constructor(agentModel: Model<AgentDocument>, etablissementModel: Model<EtablissementDocument>, configServ: ConfigService);
    addAgent(data: AgentDto): Subject<Agent>;
    editAgent(id: string, data: AgentDto, doneBye: string): Subject<Agent>;
    getAgent(id: string): Subject<Agent>;
    getAgents(): Subject<Agent[]>;
    getAgentByUsername(username: string): Subject<Agent>;
    getAgentByCode(code: string): Subject<Agent>;
}
export interface AgentManagement {
    addAgent(data: AgentDto): Subject<Agent>;
    editAgent(id: string, data: AgentDto, doneBye: string): Subject<Agent>;
    getAgent(id: string): Subject<Agent>;
    getAgents(): Subject<Agent[]>;
    getAgentByUsername(username: string): Subject<Agent>;
    getAgentByCode(code: string): Subject<Agent>;
}
