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
exports.ConfigService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const class_validator_1 = require("class-validator");
const mongoose_2 = require("mongoose");
const rxjs_1 = require("rxjs");
let ConfigService = class ConfigService {
    constructor(etablissementModel) {
        this.etablissementModel = etablissementModel;
    }
    addCenter(data) {
        throw new Error('Method not implemented.');
    }
    editCenter(idcentre, data, doneBy) {
        throw new Error('Method not implemented.');
    }
    getEtablissementByCode(code) {
        let s = new rxjs_1.Subject();
        this.etablissementModel.findOne({
            $or: [
                {
                    "_id": code
                },
                {
                    id: code
                }
            ]
        }).then(et => {
            if (!et) {
                s.error(new common_1.HttpException('etablissement not found', common_1.HttpStatus.NOT_FOUND));
            }
            s.next(et);
            s.complete();
        }).catch(e => {
            console.log(e);
            s.error(new common_1.HttpException('error happened', common_1.HttpStatus.INTERNAL_SERVER_ERROR));
        });
        return s;
    }
    addEtablissement(data) {
        let s = new rxjs_1.Subject();
        (0, class_validator_1.validate)(data).then(e => {
            if (!e && e.length > 0) {
                console.debug(e);
                s.error(new common_1.HttpException('Bad data', common_1.HttpStatus.BAD_REQUEST));
            }
            else {
                new this.etablissementModel(data.toEntity()).save().then(et => {
                    s.next(et);
                    s.complete();
                }).catch(er => {
                    console.log(er);
                    s.error(new common_1.HttpException('Error happened', common_1.HttpStatus.INTERNAL_SERVER_ERROR));
                });
            }
        }).catch(e => {
            console.debug("eee", e);
            s.error(new common_1.HttpException('Bad data', common_1.HttpStatus.BAD_REQUEST));
        });
        return s;
    }
    getEtablissements() {
        return rxjs_1.Observable.create(s => {
            this.etablissementModel.find().populate(['province', 'ville']).exec().then(d => {
                s.next(d);
                s.complete();
            }).catch(e => {
                s.error(new common_1.HttpException('Error happened', common_1.HttpStatus.INTERNAL_SERVER_ERROR));
            });
        });
    }
    getEtablissement(code) {
        let s = new rxjs_1.Subject();
        console.log("ccccc", code);
        this.etablissementModel.findOne({
            $or: [
                {
                    "_id": (code)
                },
                {
                    id: (code)
                }
            ]
        }).then(et => {
            console.debug("oooo", et);
            if (!et) {
                s.error(new common_1.HttpException('etablissement not found', common_1.HttpStatus.NOT_FOUND));
            }
            s.next(et);
            s.complete();
        }).catch(e => {
            console.log(e);
            s.error(new common_1.HttpException('error happened', common_1.HttpStatus.INTERNAL_SERVER_ERROR));
        });
        return s;
    }
    addFaculte() {
        throw new Error('Method not implemented.');
    }
};
ConfigService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Etablissement')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ConfigService);
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map