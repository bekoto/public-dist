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
exports.EtablissementMustExist = exports.UniqueEtablissementMustExist = exports.UniqueEtablissementValidatorService = exports.EtablissementValidatorService = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const rxjs_1 = require("rxjs");
const config_service_1 = require("../config.service");
let EtablissementValidatorService = class EtablissementValidatorService {
    constructor(configServ) {
        this.configServ = configServ;
    }
    validate(value, validationArguments) {
        if (value == null) {
            return false;
        }
        if (value == null || value.length == 0) {
            return false;
        }
        let v = validationArguments.object;
        return (0, rxjs_1.firstValueFrom)(this.configServ.getEtablissement(value)).then(d => {
            if (d) {
                return true;
            }
            false;
        }).catch(e => {
            return false;
        });
    }
    defaultMessage(validationArguments) {
        return "Etablissement not found";
    }
};
EtablissementValidatorService = __decorate([
    (0, common_1.Injectable)(),
    (0, class_validator_1.ValidatorConstraint)({ name: 'EtablissementExist', async: true }),
    __metadata("design:paramtypes", [config_service_1.ConfigService])
], EtablissementValidatorService);
exports.EtablissementValidatorService = EtablissementValidatorService;
let UniqueEtablissementValidatorService = class UniqueEtablissementValidatorService {
    constructor(configServ) {
        this.configServ = configServ;
    }
    validate(value, validationArguments) {
        if (value == null) {
            return false;
        }
        if (value == null || value.length == 0) {
            return false;
        }
        let v = validationArguments.object;
        return (0, rxjs_1.firstValueFrom)(this.configServ.getEtablissementByCode(value)).then(d => {
            if (!d) {
                return true;
            }
            false;
        }).catch(e => {
            return true;
        });
    }
    defaultMessage(validationArguments) {
        return "Code Etablissement already exists";
    }
};
UniqueEtablissementValidatorService = __decorate([
    (0, common_1.Injectable)(),
    (0, class_validator_1.ValidatorConstraint)({ name: 'UniqueEtablissementValidatorService', async: true }),
    __metadata("design:paramtypes", [config_service_1.ConfigService])
], UniqueEtablissementValidatorService);
exports.UniqueEtablissementValidatorService = UniqueEtablissementValidatorService;
function UniqueEtablissementMustExist(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'UniqueEtablissementValidatorService',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: UniqueEtablissementValidatorService,
        });
    };
}
exports.UniqueEtablissementMustExist = UniqueEtablissementMustExist;
function EtablissementMustExist(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'EtablissementExist',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: EtablissementValidatorService,
        });
    };
}
exports.EtablissementMustExist = EtablissementMustExist;
//# sourceMappingURL=etablissement-constrainte.js.map