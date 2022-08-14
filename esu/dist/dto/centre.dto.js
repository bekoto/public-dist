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
exports.CentreDto = void 0;
const class_validator_1 = require("class-validator");
const mongoose_1 = require("mongoose");
const centre_1 = require("../entity/centre");
const province_1 = require("../entity/province");
class CentreDto {
    toEntity() {
        let c = new centre_1.Centre();
        c.code = this.code;
        if (this.id) {
            c.id = new mongoose_1.default.Schema.Types.ObjectId(this.id);
        }
        c.libelle = this.libelle;
        let p = new province_1.Province();
        p._id = new mongoose_1.default.Schema.Types.ObjectId(this.idProvince);
        c.province = p;
        return c;
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CentreDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CentreDto.prototype, "libelle", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CentreDto.prototype, "idProvince", void 0);
exports.CentreDto = CentreDto;
//# sourceMappingURL=centre.dto.js.map