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
exports.AgentSchema = exports.Agent = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const parking_1 = require("./parking");
const user_1 = require("./user");
let Agent = class Agent {
};
__decorate([
    (0, mongoose_1.Prop)({ unique: true }),
    __metadata("design:type", String)
], Agent.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        unique: true
    }),
    __metadata("design:type", String)
], Agent.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Agent.prototype, "nom", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Agent.prototype, "prenom", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", parking_1.Parking)
], Agent.prototype, "parking", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", user_1.User)
], Agent.prototype, "user", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Agent.prototype, "email", void 0);
Agent = __decorate([
    (0, mongoose_1.Schema)({})
], Agent);
exports.Agent = Agent;
exports.AgentSchema = mongoose_1.SchemaFactory.createForClass(Agent);
//# sourceMappingURL=agent.js.map