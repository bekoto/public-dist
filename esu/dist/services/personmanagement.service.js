"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonManagementService = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const rxjs_1 = require("rxjs");
let PersonManagementService = class PersonManagementService {
    addStudent(data) {
        let s = new rxjs_1.Subject();
        (0, class_validator_1.validate)(data).then(err => {
            if (err && err.length > 0) {
                s.error(new common_1.HttpException({
                    msg: "bad data",
                    error: err
                }, common_1.HttpStatus.BAD_REQUEST));
            }
            else {
            }
        });
        return s;
    }
    edit(id, data, doneBy) {
        throw new Error('Method not implemented.');
    }
    getStudents() {
        throw new Error('Method not implemented.');
    }
    getStudent(id) {
        throw new Error('Method not implemented.');
    }
};
PersonManagementService = __decorate([
    (0, common_1.Injectable)()
], PersonManagementService);
exports.PersonManagementService = PersonManagementService;
//# sourceMappingURL=personmanagement.service.js.map