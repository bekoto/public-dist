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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueAgent = exports.UniqueAgentConstrainteService = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const rxjs_1 = require("rxjs");
const agent_manager_service_1 = require("../agent-manager-service");
const config_service_1 = require("../config.service");
let UniqueAgentConstrainteService = class UniqueAgentConstrainteService {
    constructor(configServ, agentServ) {
        this.configServ = configServ;
        this.agentServ = agentServ;
    }
    validate(value, validationArguments) {
        if (!value || value.length == 0) {
            return false;
        }
        return (0, rxjs_1.firstValueFrom)(this.agentServ.getAgentByCode(value)).then(a => {
            if (a) {
                return false;
            }
            return true;
        }).catch(e => {
            return false;
        });
    }
    defaultMessage(validationArguments) {
        return "Code already exists";
    }
};
UniqueAgentConstrainteService = __decorate([
    (0, common_1.Injectable)(),
    (0, class_validator_1.ValidatorConstraint)({ name: 'UniqueAgentConstrainteService', async: true }),
    __metadata("design:paramtypes", [config_service_1.ConfigService, agent_manager_service_1.AgentManagementService])
], UniqueAgentConstrainteService);
exports.UniqueAgentConstrainteService = UniqueAgentConstrainteService;
function UniqueAgent(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'UniqueAgentConstrainteService',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: UniqueAgentConstrainteService,
        });
    };
}
exports.UniqueAgent = UniqueAgent;
//# sourceMappingURL=uniqueagentconstrainte.service.js.map