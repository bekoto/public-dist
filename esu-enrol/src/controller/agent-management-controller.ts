import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { Subject } from "rxjs";
import { AgentDto } from "src/dto/agent-dto";
import { Agent } from "src/entity/agent";
import { AgentManagement, AgentManagementService } from "src/services/agent-manager-service";


@Controller("agents")
export  class AgentManagementController implements AgentManagement{

    constructor(private agentMan : AgentManagementService){
        
    }

    @Post("")
    addAgent(@Body()data: AgentDto): Subject<Agent> {
        console.log("aaa",data);
        return this.agentMan.addAgent(data);
    }
    @Put(":id")
    editAgent(@Param("id") id: string,@Body() data: AgentDto, doneBye: string): Subject<Agent> {
        console.log(id);
        return this.agentMan.editAgent(id, data, doneBye);
    }
    @Get(":id")
    getAgent(@Param("id")id: string): Subject<Agent> {
        console.log(id)
        return this.agentMan.getAgent(id);
    }
    getAgents(): Subject<Agent[]> {
        return this.agentMan.getAgents();
    }
    @Get("by/username/:username")
    getAgentByUsername(@Param("username") username: string): Subject<Agent> {
        return this.agentMan.getAgentByUsername(username);
    }
    getAgentByCode(code: string): Subject<Agent> {
        return this.agentMan.getAgentByCode(code);
    }

}