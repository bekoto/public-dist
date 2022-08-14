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
exports.EtudiantSchema = exports.Etudiant = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const adress_1 = require("../model/adress");
const individu_1 = require("../model/individu");
const agent_1 = require("./agent");
const departement_1 = require("./departement");
const faculte_1 = require("./faculte");
const file_1 = require("./file");
let Etudiant = class Etudiant {
};
__decorate([
    (0, mongoose_1.Prop)({
        unique: true
    }),
    __metadata("design:type", String)
], Etudiant.prototype, "matricule", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Etudiant.prototype, "nom", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Etudiant.prototype, "prenom", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Etudiant.prototype, "postnom", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Etudiant.prototype, "promotion", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Etudiant.prototype, "orientation", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", faculte_1.Faculte)
], Etudiant.prototype, "filiere", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", departement_1.Departement)
], Etudiant.prototype, "departement", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Etudiant.prototype, "sexe", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Etudiant.prototype, "dateNaissance", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", adress_1.Adresse)
], Etudiant.prototype, "adresse", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Etudiant.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", agent_1.Agent)
], Etudiant.prototype, "createdBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", file_1.File)
], Etudiant.prototype, "photo", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", individu_1.Individu)
], Etudiant.prototype, "individu", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Etudiant.prototype, "tel", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], Etudiant.prototype, "sync", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], Etudiant.prototype, "syncData", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Etudiant.prototype, "email", void 0);
Etudiant = __decorate([
    (0, mongoose_1.Schema)()
], Etudiant);
exports.Etudiant = Etudiant;
exports.EtudiantSchema = mongoose_1.SchemaFactory.createForClass(Etudiant);
//# sourceMappingURL=etudiant.js.map