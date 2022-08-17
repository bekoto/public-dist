/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { HttpException, HttpService } from '@nestjs/common';
import { Model } from 'mongoose';
import { Subject } from 'rxjs';
import { SyncAdapter } from './dto/sync-adapter';
import { TaxeDto } from './dto/taxe-dto';
import { Agent, AgentDocument } from './entity/agent';
import { CategoryPriceDocument } from './entity/category';
import { ParkingDocument } from './entity/parking';
import { SyncDeviceDocument } from './entity/sync-device';
import { Taxe, TaxeDocument } from './entity/taxe';
export declare class AppService {
    private readonly agentModel;
    private readonly parkingModel;
    private categoryModel;
    private readonly taxeModel;
    private readonly syncModel;
    private readonly httpService;
    constructor(agentModel: Model<AgentDocument>, parkingModel: Model<ParkingDocument>, categoryModel: Model<CategoryPriceDocument>, taxeModel: Model<TaxeDocument>, syncModel: Model<SyncDeviceDocument>, httpService: HttpService);
    getAgents(): Promise<Omit<Agent & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    getAgent(code: string): Promise<(Agent & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | HttpException>;
    getAgentByUsername(code: string): Promise<(Agent & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | HttpException>;
    addTaxes(d: SyncAdapter<TaxeDto[]>): Promise<SyncAdapter<Taxe[]>>;
    getParking(): Promise<(import("mongoose").Document<unknown, any, ParkingDocument> & import("./entity/parking").Parking & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    addAgent(data: Agent): Subject<Agent>;
}
export declare const USER_MANAGER_API_URL = "http://localhost:4010";
