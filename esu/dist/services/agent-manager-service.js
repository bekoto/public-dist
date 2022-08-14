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
exports.AgentManagementService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const class_validator_1 = require("class-validator");
const mongoose_2 = require("mongoose");
const rxjs_1 = require("rxjs");
const config_service_1 = require("./config.service");
const app_config_1 = require("../util/app-config");
const user_form_1 = require("../model/user-form");
const access_platform_1 = require("../model/access-platform");
let AgentManagementService = class AgentManagementService {
    constructor(agentModel, etablissementModel, httpService, configServ) {
        this.agentModel = agentModel;
        this.etablissementModel = etablissementModel;
        this.httpService = httpService;
        this.configServ = configServ;
    }
    addAgent(data, appToken) {
        let s = new rxjs_1.Subject();
        (0, class_validator_1.validate)(data).then(e => {
            if (e && e.length > 0) {
                s.error(new common_1.HttpException('bad data', common_1.HttpStatus.BAD_REQUEST));
            }
            else {
                this.configServ.getEtablissement(data.idEtabilissement).subscribe(et => {
                    let agentToSave = data.toEntity();
                    agentToSave.etablissement = et;
                    new this.agentModel(agentToSave).save().then(a => {
                        if (a) {
                            let form = new user_form_1.UserForm();
                            form.accessPlatform = access_platform_1.AccessPlatform.ALL;
                            form.app = appToken;
                            form.nom = data.nom;
                            form.email = data.email;
                            form.phone = data.phone;
                            form.category = data.idCategorie;
                            let tokens = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjIzY2Y3ODg4ZGRhYTdkNGJjYjI5OSIsImVtYWlsIjoiZXN1LmRhc2hib2FyZEBlbWFpbC5jb20iLCJhcHAiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOls5OCwyNDIsNjAsMjQ3LDEzNiwxNDEsMjE4LDE2NywyMTIsMTg4LDE3OCwxNTFdfSwiaWF0IjoxNjYwNDIwMTI1LCJleHAiOjE2OTE5NTYxMjV9._cOtwK4d2QEhAwtENySr0bAa-7sDleSEJQyBin84z3Y";
                            this.httpService.post(app_config_1.USER_MANAGER_API_URL + "/users", form, {
                                headers: {
                                    "Authorization": "Bearer " + tokens
                                }
                            }).subscribe(d => {
                                let u = d.data;
                                if (d.status == 200 || d.status == 201) {
                                    a.user = u;
                                    a.save().then(aa => {
                                        s.next(aa);
                                        s.complete();
                                    });
                                }
                                else {
                                    this.agentModel.deleteOne({
                                        "code": a.code
                                    });
                                    s.error(new common_1.HttpException({
                                        msg: d.statusText,
                                        error: {}
                                    }, common_1.HttpStatus.BAD_REQUEST));
                                }
                                console.log("user respo", d.status);
                            }, errUser => {
                                console.debug("erruuuu", errUser.response.data);
                                this.agentModel.deleteOne({
                                    "code": a.code
                                }).then(ad => {
                                    console.log();
                                })
                                    .catch(errDelAgent => {
                                    console.log(errDelAgent);
                                })
                                    .finally(() => {
                                    s.error(new common_1.HttpException(errUser.response.data, common_1.HttpStatus.BAD_REQUEST));
                                });
                            });
                        }
                        else {
                            s.error(new common_1.HttpException('Error happened', common_1.HttpStatus.INTERNAL_SERVER_ERROR));
                        }
                    }).catch(er => {
                        console.log(er);
                        s.error(new common_1.HttpException('Error happened', common_1.HttpStatus.INTERNAL_SERVER_ERROR));
                    });
                }, err => {
                    console.debug(err);
                    s.error(new common_1.HttpException('Error happened', common_1.HttpStatus.INTERNAL_SERVER_ERROR));
                });
            }
        }).catch(er => {
            console.log(er);
            s.error(new common_1.HttpException('Error happened', common_1.HttpStatus.INTERNAL_SERVER_ERROR));
        });
        return s;
    }
    editAgent(id, data, doneBye) {
        throw new Error("Method not implemented.");
    }
    getAgent(id) {
        let s = new rxjs_1.Subject();
        this.agentModel.findOne({
            $or: [
                {
                    "_id": id
                },
                {
                    id: id
                }
            ]
        }).populate(['etablissement', 'centre']).exec().then(a => {
            if (!a) {
                s.error(new common_1.HttpException('agent not found', common_1.HttpStatus.NOT_FOUND));
            }
            else {
                s.next(a);
                s.complete();
            }
        }).catch(e => {
            console.log(e);
            s.error(new common_1.HttpException('Error happened', common_1.HttpStatus.INTERNAL_SERVER_ERROR));
        });
        return s;
    }
    getAgents() {
        let s = new rxjs_1.Subject();
        this.agentModel.find().exec().then(a => {
            s.next(a);
            s.complete();
        }).catch(e => {
            console.log(e);
            s.error(new common_1.HttpException('Error happened', common_1.HttpStatus.INTERNAL_SERVER_ERROR));
        });
        return s;
    }
    getAgentByUsername(username) {
        let s = new rxjs_1.Subject();
        this.agentModel.findOne({
            user: {
                username: username
            }
        }).populate(['etablissement', 'centre']).exec().then(a => {
            if (!a) {
                s.error(new common_1.HttpException('agent not found', common_1.HttpStatus.NOT_FOUND));
            }
            else {
                s.next(a);
                s.complete();
            }
        }).catch(e => {
            console.log(e);
            s.error(new common_1.HttpException('Error happened', common_1.HttpStatus.INTERNAL_SERVER_ERROR));
        });
        return s;
    }
    getAgentByCode(code) {
        let s = new rxjs_1.Subject();
        this.agentModel.findOne({
            code: code
        }).populate(['etablissement', 'centre']).exec().then(a => {
            if (a) {
                s.error(new common_1.HttpException('agent not found', common_1.HttpStatus.NOT_FOUND));
            }
            else {
                s.next(a);
                s.complete();
            }
        }).catch(e => {
            console.log(e);
            s.error(new common_1.HttpException('Error happened', common_1.HttpStatus.INTERNAL_SERVER_ERROR));
        });
        return s;
    }
};
AgentManagementService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Agent')),
    __param(1, (0, mongoose_1.InjectModel)('Etablissement')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        common_1.HttpService,
        config_service_1.ConfigService])
], AgentManagementService);
exports.AgentManagementService = AgentManagementService;
//# sourceMappingURL=agent-manager-service.js.map