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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigController = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const centre_dto_1 = require("../dto/centre.dto");
const province_1 = require("../entity/province");
const etablissement_dto_1 = require("../model/etablissement-dto");
const config_service_1 = require("../services/config.service");
let ConfigController = class ConfigController {
    constructor(configService) {
        this.configService = configService;
    }
    addEtablissement(data) {
        return this.configService.addEtablissement(data);
    }
    getEtablissements() {
        return this.configService.getEtablissements();
    }
    getEtablissement(id) {
        return this.configService.getEtablissement(id);
    }
    getEtablissementBycode(code) {
        return this.configService.getEtablissementByCode(code);
    }
    getFacOfEtablissements(codeEtablissement, codeFac) {
        return this.configService.getFaculteOfEtablissement(codeFac, codeEtablissement);
    }
    addCentre(data) {
        return this.configService.addCenter(data);
    }
    getCentres() {
        return this.configService.getCenters();
    }
    addProvince(data) {
        return this.configService.addProvince(data);
    }
    getProvinces() {
        return this.configService.getProvinces();
    }
    getProvince(idprovince) {
        return this.configService.getProvinces();
    }
};
__decorate([
    (0, common_1.Post)('etablissements'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [etablissement_dto_1.EtablissementDto]),
    __metadata("design:returntype", void 0)
], ConfigController.prototype, "addEtablissement", null);
__decorate([
    (0, common_1.Get)('etablissements'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConfigController.prototype, "getEtablissements", null);
__decorate([
    (0, common_1.Get)('etablissements/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConfigController.prototype, "getEtablissement", null);
__decorate([
    (0, common_1.Get)('etablissements/by/code/:code'),
    __param(0, (0, common_1.Param)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConfigController.prototype, "getEtablissementBycode", null);
__decorate([
    (0, common_1.Get)('etablissements/:etab/facultes/:fac'),
    __param(0, (0, common_1.Param)('etab')),
    __param(1, (0, common_1.Param)('fac')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ConfigController.prototype, "getFacOfEtablissements", null);
__decorate([
    (0, common_1.Post)('centres'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [centre_dto_1.CentreDto]),
    __metadata("design:returntype", void 0)
], ConfigController.prototype, "addCentre", null);
__decorate([
    (0, common_1.Get)('centres'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConfigController.prototype, "getCentres", null);
__decorate([
    (0, common_1.Post)("provinces"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [province_1.Province]),
    __metadata("design:returntype", rxjs_1.Subject)
], ConfigController.prototype, "addProvince", null);
__decorate([
    (0, common_1.Get)("provinces"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], ConfigController.prototype, "getProvinces", null);
__decorate([
    (0, common_1.Get)("provinces/:prov"),
    __param(0, (0, common_1.Param)('prov')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", rxjs_1.Observable)
], ConfigController.prototype, "getProvince", null);
ConfigController = __decorate([
    (0, common_1.Controller)('config'),
    __metadata("design:paramtypes", [config_service_1.ConfigService])
], ConfigController);
exports.ConfigController = ConfigController;
//# sourceMappingURL=config.controller.js.map