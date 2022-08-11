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
exports.AgentDto = void 0;
const class_validator_1 = require("class-validator");
const mongoose_1 = require("mongoose");
const agent_1 = require("../entity/agent");
const centre_1 = require("../entity/centre");
const etablissement_1 = require("../entity/etablissement");
const user_1 = require("../model/user");
class AgentDto {
    toEntity() {
        let a = new agent_1.Agent();
        a.nom = this.nom;
        a.penom = this.prenom;
        a.code = this.code;
        if (this.idCentre) {
            let c = new centre_1.Centre();
            c.id = new mongoose_1.default.Types.ObjectId(this.idCentre);
            a.centre = c;
        }
        let et = new etablissement_1.Etablissement();
        et.id = new mongoose_1.default.Schema.Types.ObjectId(this.idEtabilissement);
        a.etablissement = et;
        a.dateNaissance = new Date(this.dateNaissance);
        let u = new user_1.User();
        u.username = this.username;
        a.user = u;
        return a;
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AgentDto.prototype, "nom", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AgentDto.prototype, "prenom", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], AgentDto.prototype, "dateNaissance", void 0);
exports.AgentDto = AgentDto;
//# sourceMappingURL=agent-dto.js.map