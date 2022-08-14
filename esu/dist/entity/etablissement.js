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
exports.EtablissementSchema = exports.TypeEtablissement = exports.Etablissement = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const province_1 = require("./province");
const ville_1 = require("./ville");
const mongoose_2 = require("mongoose");
let Etablissement = class Etablissement {
    constructor() {
        this.grades = [];
        this.services = [];
        this.facultes = [];
        this.etudiants = [];
    }
};
__decorate([
    (0, mongoose_1.Prop)({
        auto: true
    }),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], Etablissement.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        unique: true
    }),
    __metadata("design:type", String)
], Etablissement.prototype, "libelle", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Etablissement.prototype, "alias", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Etablissement.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        unique: true
    }),
    __metadata("design:type", String)
], Etablissement.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", province_1.Province)
], Etablissement.prototype, "province", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", ville_1.Ville)
], Etablissement.prototype, "ville", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Etablissement.prototype, "grades", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Etablissement.prototype, "services", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Etablissement.prototype, "facultes", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [
            {
                type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Etudiant'
            }
        ]
    }),
    __metadata("design:type", Array)
], Etablissement.prototype, "etudiants", void 0);
Etablissement = __decorate([
    (0, mongoose_1.Schema)()
], Etablissement);
exports.Etablissement = Etablissement;
var TypeEtablissement;
(function (TypeEtablissement) {
    TypeEtablissement["UNIVERTIY"] = "UNIVERSITY";
    TypeEtablissement["INSTITUTE"] = "INSTITUTE";
    TypeEtablissement["TRAINING"] = "TRAINING";
})(TypeEtablissement = exports.TypeEtablissement || (exports.TypeEtablissement = {}));
exports.EtablissementSchema = mongoose_1.SchemaFactory.createForClass(Etablissement);
//# sourceMappingURL=etablissement.js.map