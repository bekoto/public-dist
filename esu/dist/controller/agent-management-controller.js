"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentManagementController = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const agent_dto_1 = require("../dto/agent-dto");
const agent_manager_service_1 = require("../services/agent-manager-service");
const jwt_decode_1 = require("jwt-decode");
let AgentManagementController = class AgentManagementController {
    constructor(agentMan) {
        this.agentMan = agentMan;
    }
    addAgent(data, tokenb) {
        console.log("aaa", data, tokenb);
        var decoded = (0, jwt_decode_1.default)(tokenb);
        console.log("deccoed", decoded);
        return this.agentMan.addAgent(data, tokenb);
    }
    editAgent(id, data, doneBye) {
        console.log(id);
        return this.agentMan.editAgent(id, data, doneBye);
    }
    getAgent(id) {
        console.log(id);
        return this.agentMan.getAgent(id);
    }
    getAgents() {
        return this.agentMan.getAgents();
    }
    getAgentByUsername(username) {
        return this.agentMan.getAgentByUsername(username);
    }
    getAgentByCode(code) {
        return this.agentMan.getAgentByCode(code);
    }
};
__decorate([
    (0, common_1.Post)(""),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [agent_dto_1.AgentDto, String]),
    __metadata("design:returntype", rxjs_1.Subject)
], AgentManagementController.prototype, "addAgent", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, agent_dto_1.AgentDto, String]),
    __metadata("design:returntype", rxjs_1.Subject)
], AgentManagementController.prototype, "editAgent", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", rxjs_1.Subject)
], AgentManagementController.prototype, "getAgent", null);
__decorate([
    (0, common_1.Get)("by/username/:username"),
    __param(0, (0, common_1.Param)("username")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", rxjs_1.Subject)
], AgentManagementController.prototype, "getAgentByUsername", null);
AgentManagementController = __decorate([
    (0, common_1.Controller)("agents"),
    __metadata("design:paramtypes", [agent_manager_service_1.AgentManagementService])
], AgentManagementController);
exports.AgentManagementController = AgentManagementController;
//# sourceMappingURL=agent-management-controller.js.map