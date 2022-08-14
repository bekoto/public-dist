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
exports.EtudiantDto = void 0;
const class_validator_1 = require("class-validator");
const etudiant_1 = require("../entity/etudiant");
class EtudiantDto {
    toEntity() {
        let e = new etudiant_1.Etudiant();
        e.adresse = this.adresse;
        e.nom = this.nom;
        e.prenom = this.prenom;
        e.postnom = this.postnom;
        e.tel = this.tel;
        e.createdAt = new Date();
        e.dateNaissance = new Date(this.dateNaissance);
        e.matricule = this.matricule;
        e.promotion = this.promotion;
        e.sexe = this.sexe;
        e.email = this.email;
        e.individu = this.individu;
        e.sync = this.sync;
        e.syncData = this.syncData;
        return e;
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], EtudiantDto.prototype, "nom", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], EtudiantDto.prototype, "prenom", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], EtudiantDto.prototype, "postnom", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], EtudiantDto.prototype, "promotion", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], EtudiantDto.prototype, "idfiliere", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], EtudiantDto.prototype, "departement", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], EtudiantDto.prototype, "sexe", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], EtudiantDto.prototype, "dateNaissance", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], EtudiantDto.prototype, "lieuNaissance", void 0);
exports.EtudiantDto = EtudiantDto;
//# sourceMappingURL=etudiant-dto.js.map