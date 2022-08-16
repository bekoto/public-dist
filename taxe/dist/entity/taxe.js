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
exports.TaxeSchema = exports.Taxe = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const category_1 = require("./category");
const parking_1 = require("./parking");
let Taxe = class Taxe {
    constructor() {
        this.taxedAt = new Date();
        this.syncedAt = new Date();
        this.qte = 1;
    }
};
__decorate([
    (0, mongoose_1.Prop)({
        unique: true
    }),
    __metadata("design:type", String)
], Taxe.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Taxe.prototype, "amount", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Taxe.prototype, "matricule", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", category_1.CategoryPrice)
], Taxe.prototype, "category", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Taxe.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Taxe.prototype, "taxedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Taxe.prototype, "syncedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", parking_1.Parking)
], Taxe.prototype, "parking", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Taxe.prototype, "qte", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Taxe.prototype, "categorie", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Taxe.prototype, "idCategorie", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Taxe.prototype, "agentId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Taxe.prototype, "agentNoms", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Taxe.prototype, "username", void 0);
Taxe = __decorate([
    (0, mongoose_1.Schema)()
], Taxe);
exports.Taxe = Taxe;
exports.TaxeSchema = mongoose_1.SchemaFactory.createForClass(Taxe);
//# sourceMappingURL=taxe.js.map