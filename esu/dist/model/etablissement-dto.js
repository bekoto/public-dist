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
exports.EtablissementDto = void 0;
const class_validator_1 = require("class-validator");
const mongoose_1 = require("mongoose");
const etablissement_1 = require("../entity/etablissement");
const province_1 = require("../entity/province");
class EtablissementDto {
    constructor() {
        this.grades = [];
        this.services = [];
        this.facultes = [];
    }
    toEntity() {
        let e = new etablissement_1.Etablissement();
        if (this.id) {
            e.id = new mongoose_1.default.Schema.Types.ObjectId(this.id);
        }
        e.libelle = this.libelle;
        e.type = this.type;
        e.code = this.code;
        e.province = this.province;
        e.ville = this.ville;
        e.alias = this.alias;
        e.grades = this.grades;
        e.services = this.services;
        e.facultes = this.facultes;
        return e;
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], EtablissementDto.prototype, "libelle", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], EtablissementDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], EtablissementDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], EtablissementDto.prototype, "alias", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", province_1.Province)
], EtablissementDto.prototype, "province", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], EtablissementDto.prototype, "grades", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], EtablissementDto.prototype, "services", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], EtablissementDto.prototype, "facultes", void 0);
exports.EtablissementDto = EtablissementDto;
//# sourceMappingURL=etablissement-dto.js.map