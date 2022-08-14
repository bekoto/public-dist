"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_service_1 = require("./services/config.service");
const config_controller_1 = require("./controller/config.controller");
const config_1 = require("@nestjs/config");
const util_1 = require("./util/util");
const etablissement_1 = require("./entity/etablissement");
const file_1 = require("./entity/file");
const agent_1 = require("./entity/agent");
const agent_management_controller_1 = require("./controller/agent-management-controller");
const agent_manager_service_1 = require("./services/agent-manager-service");
const etablissement_constrainte_1 = require("./services/validators/etablissement-constrainte");
const centre_1 = require("./entity/centre");
const province_1 = require("./entity/province");
const uniqueagentconstrainte_service_1 = require("./services/validators/uniqueagentconstrainte.service");
const etudiant_1 = require("./entity/etudiant");
const envFilePath = (0, util_1.getEnvPath)(`${__dirname}/`);
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            common_1.HttpModule,
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule, common_1.HttpModule],
                useFactory: async (conf) => {
                    if (conf.get('DATABASE_MUST_AUTH') == 'NO') {
                        console.debug(`mongodb://${conf.get('DATABASE_SERVER')}:${conf.get('DATABASE_PORT')}/${conf.get('DATABASE_SCHEMA')}`);
                        return ({
                            uri: `mongodb://${conf.get('DATABASE_SERVER')}:${conf.get('DATABASE_PORT')}/${conf.get('DATABASE_SCHEMA')}`,
                            useNewUrlParser: true
                        });
                    }
                    else {
                        console.log(`mongodb://${conf.get('DATABASE_USER')}:${conf.get('DATABASE_PASSWORD')}@${conf.get('DATABASE_SERVER')}:${conf.get('DATABASE_PORT')}/${conf.get('DATABASE_SCHEMA')}`);
                        return ({
                            uri: `mongodb://${conf.get('DATABASE_USER')}:${conf.get('DATABASE_PASSWORD')}@${conf.get('DATABASE_SERVER')}:${conf.get('DATABASE_PORT')}/${conf.get('DATABASE_SCHEMA')}`,
                            useNewUrlParser: true
                        });
                    }
                },
                inject: [config_1.ConfigService]
            }),
            mongoose_1.MongooseModule.forFeature([
                { name: "Centre", schema: centre_1.centreSchema },
                { name: "Province", schema: province_1.ProvinceSchema },
                { name: "Agent", schema: agent_1.AgentSchema },
                { name: "Etudiant", schema: etudiant_1.EtudiantSchema },
                { name: "Etablissement", schema: etablissement_1.EtablissementSchema },
                { name: "File", schema: file_1.FileSchema }
            ]),
            config_1.ConfigModule.forRoot({
                envFilePath: envFilePath, isGlobal: true
            })
        ],
        controllers: [app_controller_1.AppController, config_controller_1.ConfigController, agent_management_controller_1.AgentManagementController],
        providers: [app_service_1.AppService, config_service_1.ConfigService, agent_manager_service_1.AgentManagementService, etablissement_constrainte_1.EtablissementValidatorService, uniqueagentconstrainte_service_1.UniqueAgentConstrainteService, etablissement_constrainte_1.UniqueEtablissementValidatorService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map