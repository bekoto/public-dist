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
exports.centreSchema = exports.Centre = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const province_1 = require("./province");
let Centre = class Centre {
};
__decorate([
    (0, mongoose_1.Prop)({
        auto: true,
        _id: true
    }),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], Centre.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ unique: true }),
    __metadata("design:type", String)
], Centre.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Centre.prototype, "libelle", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Province'
    }),
    __metadata("design:type", province_1.Province)
], Centre.prototype, "province", void 0);
Centre = __decorate([
    (0, mongoose_1.Schema)()
], Centre);
exports.Centre = Centre;
exports.centreSchema = mongoose_1.SchemaFactory.createForClass(Centre);
//# sourceMappingURL=centre.js.map