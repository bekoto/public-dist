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
exports.USER_MANAGER_API_URL = exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const rxjs_1 = require("rxjs");
const user_form_1 = require("./dto/user-form");
const taxe_1 = require("./entity/taxe");
const access_platform_1 = require("./model/access-platform");
let AppService = class AppService {
    constructor(agentModel, parkingModel, categoryModel, taxeModel, syncModel, httpService) {
        this.agentModel = agentModel;
        this.parkingModel = parkingModel;
        this.categoryModel = categoryModel;
        this.taxeModel = taxeModel;
        this.syncModel = syncModel;
        this.httpService = httpService;
    }
    getAgents() {
        return this.agentModel.find().populate(['user']).exec();
    }
    getAgent(code) {
        return this.agentModel.findOne({
            code: code
        }).populate(['user']).exec().catch(e => {
            return new common_1.HttpException('Agent not found', common_1.HttpStatus.NOT_FOUND);
        });
    }
    getAgentByUsername(code) {
        return this.agentModel.findOne({
            "user.username": code
        }).populate(['user', "parking"]).exec().then(a => {
            if (!a) {
                return new common_1.HttpException('Agent not found', common_1.HttpStatus.NOT_FOUND);
            }
            return a;
        }).catch(e => {
            return new common_1.HttpException('Agent not found', common_1.HttpStatus.NOT_FOUND);
        });
    }
    async addTaxes(d) {
        const sTaxes = [];
        let dStart = new Date();
        d.syncInfo.dateStart = dStart;
        try {
            if (d && d.datas && d.datas.length > 0) {
                for (const tt of d.datas) {
                    try {
                        let t = new taxe_1.Taxe();
                        t.id = tt.id;
                        t.amount = tt.amount;
                        t.matricule = tt.matricule;
                        let cat = await this.categoryModel.findOne({
                            code: tt.idCategorie
                        }).exec();
                        console.log(cat);
                        t.category = cat;
                        t.categorie = tt.categorie;
                        t.agentNoms = tt.agentNoms;
                        t.taxedAt = new Date(tt.taxedAt);
                        t.code = tt.code;
                        t.parking = tt.parking;
                        t.username = tt.username;
                        t.qte = tt.qte;
                        t.syncedAt = new Date();
                        t.agent = await this.agentModel.findOne({
                            code: tt.agentId
                        }).exec();
                        let ts = await new this.taxeModel(t).save();
                        sTaxes.push(ts);
                    }
                    catch (error) {
                        console.log("eerorsync", error);
                    }
                }
            }
            let dEnd = new Date();
            d.syncInfo.itemSync = sTaxes.length;
            let syn = await new this.syncModel(d.syncInfo).save();
            return sTaxes;
        }
        catch (error) {
            console.log(error);
            throw new common_1.HttpException('Error happened', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    getParking() {
        return this.parkingModel.find().exec();
    }
    addAgent(data) {
        let s = new rxjs_1.Subject();
        new this.agentModel(data).save().then(a => {
            if (a) {
                let form = new user_form_1.UserForm();
                form.accessPlatform = access_platform_1.AccessPlatform.ALL;
                form.app = "62fc05cb0de2e4f531270fe1";
                form.app = data.app;
                form.nom = data.nom;
                form.email = data.email;
                form.phone = data.phone;
                form.category = data.idCategorie;
                console.log("useform", form);
                this.httpService.post(exports.USER_MANAGER_API_URL + "/register", form).subscribe(d => {
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
                    console.debug("erruuuu", errUser.response.data, errUser.response);
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
        }).catch(e => {
            console.debug(e);
            s.error(e);
        });
        return s;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Agent')),
    __param(1, (0, mongoose_1.InjectModel)('Parking')),
    __param(2, (0, mongoose_1.InjectModel)('Category')),
    __param(3, (0, mongoose_1.InjectModel)('Taxe')),
    __param(4, (0, mongoose_1.InjectModel)('SyncDevice')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        common_1.HttpService])
], AppService);
exports.AppService = AppService;
exports.USER_MANAGER_API_URL = "http://localhost:4010";
//# sourceMappingURL=app.service.js.map