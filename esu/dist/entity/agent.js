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
const mongoose_2 = require("mongoose");
const individu_1 = require("../model/individu");
const centre_1 = require("./centre");
const etablissement_1 = require("./etablissement");
const user_1 = require("../model/user");
let Agent = class Agent {
};
__decorate([
    (0, mongoose_1.Prop)({
        _id: true,
        auto: true
    }),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], Agent.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        unique: true
    }),
    __metadata("design:type", String)
], Agent.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Agent.prototype, "nom", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Schema.Types.ObjectId, ref: "Centre"
    }),
    __metadata("design:type", centre_1.Centre)
], Agent.prototype, "centre", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Schema.Types.ObjectId, ref: "Etablissement"
    }),
    __metadata("design:type", etablissement_1.Etablissement)
], Agent.prototype, "etablissement", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", individu_1.Individu)
], Agent.prototype, "individu", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Agent.prototype, "penom", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Agent.prototype, "dateNaissance", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", user_1.User)
], Agent.prototype, "user", void 0);
Agent = __decorate([
    (0, mongoose_1.Schema)()
], Agent);
exports.Agent = Agent;
exports.AgentSchema = mongoose_1.SchemaFactory.createForClass(Agent);
//# sourceMappingURL=agent.js.map