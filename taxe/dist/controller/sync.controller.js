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
exports.SyncController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("../app.service");
const sync_adapter_1 = require("../dto/sync-adapter");
let SyncController = class SyncController {
    constructor(appServ) {
        this.appServ = appServ;
    }
    syncTaxesParking(data) {
        return this.appServ.addTaxes(data);
    }
};
__decorate([
    (0, common_1.Post)(""),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sync_adapter_1.SyncAdapter]),
    __metadata("design:returntype", void 0)
], SyncController.prototype, "syncTaxesParking", null);
SyncController = __decorate([
    (0, common_1.Controller)('sync'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], SyncController);
exports.SyncController = SyncController;
//# sourceMappingURL=sync.controller.js.map