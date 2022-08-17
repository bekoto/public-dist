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
const config_1 = require("@nestjs/config");
const app_service_1 = require("./app.service");
const util_1 = require("./util/util");
const parking_1 = require("./entity/parking");
const agent_1 = require("./entity/agent");
const category_1 = require("./entity/category");
const taxe_1 = require("./entity/taxe");
const user_1 = require("./entity/user");
const sync_device_1 = require("./entity/sync-device");
const sync_controller_1 = require("./controller/sync.controller");
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
                    console.log(`mongodb://${conf.get('DATABASE_SERVER')}:${conf.get('DATABASE_PORT')}/${conf.get('DATABASE_SCHEMA')}`);
                    if (conf.get('DATABASE_MUST_AUTH') == 'NO') {
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
                { name: "Parking", schema: parking_1.ParkingSchame },
                { name: "Agent", schema: agent_1.AgentSchema },
                { name: "Category", schema: category_1.categoryPriceSchema },
                { name: "Taxe", schema: taxe_1.TaxeSchema },
                { name: "User", schema: user_1.userSchema },
                { name: "SyncDevice", schema: sync_device_1.syncDeviceSchema },
            ]),
            config_1.ConfigModule.forRoot({
                envFilePath: envFilePath, isGlobal: true
            })
        ],
        controllers: [app_controller_1.AppController, sync_controller_1.SyncController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map