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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { AppService } from './app.service';
import { SyncAdapter } from './dto/sync-adapter';
import { TaxeDto } from './dto/taxe-dto';
import { Agent } from './entity/agent';
import { Taxe } from './entity/taxe';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getAgentsByUser(user: string): Promise<(Agent & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | import("@nestjs/common").HttpException>;
    getAgents(): Promise<Omit<Agent & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    addAgent(data: Agent): import("rxjs").Subject<Agent>;
    getAgent(code: string): Promise<(Agent & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | import("@nestjs/common").HttpException>;
    addTaxes(data: SyncAdapter<TaxeDto[]>): Promise<SyncAdapter<Taxe[]>>;
    getParking(): Promise<(import("mongoose").Document<unknown, any, import("./entity/parking").ParkingDocument> & import("./entity/parking").Parking & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
