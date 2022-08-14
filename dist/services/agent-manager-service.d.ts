import { Agent, AgentDocument } from 'src/entity/agent';
import { AgentDto } from 'src/dto/agent-dto';
import { HttpService } from '@nestjs/common';
import { Model } from 'mongoose';
import { Subject } from 'rxjs';
import { EtablissementDocument } from 'src/entity/etablissement';
import { ConfigService } from './config.service';
export declare class AgentManagementService implements AgentManagement {
    private readonly agentModel;
    private readonly etablissementModel;
    private readonly httpService;
    private readonly configServ;
    constructor(agentModel: Model<AgentDocument>, etablissementModel: Model<EtablissementDocument>, httpService: HttpService, configServ: ConfigService);
    addAgent(data: AgentDto, appToken: string): Subject<Agent>;
    editAgent(id: string, data: AgentDto, doneBye: string): Subject<Agent>;
    getAgent(id: string): Subject<Agent>;
    getAgents(): Subject<Agent[]>;
    getAgentByUsername(username: string): Subject<Agent>;
    getAgentByCode(code: string): Subject<Agent>;
}
export interface AgentManagement {
    addAgent(data: AgentDto, appToekn: string): Subject<Agent>;
    editAgent(id: string, data: AgentDto, doneBye: string): Subject<Agent>;
    getAgent(id: string): Subject<Agent>;
    getAgents(): Subject<Agent[]>;
    getAgentByUsername(username: string): Subject<Agent>;
    getAgentByCode(code: string): Subject<Agent>;
}
