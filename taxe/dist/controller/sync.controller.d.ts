import { AppService } from 'src/app.service';
import { SyncAdapter } from 'src/dto/sync-adapter';
export declare class SyncController {
    private appServ;
    constructor(appServ: AppService);
    syncTaxesParking(data: SyncAdapter): Promise<import("../entity/taxe").Taxe[]>;
}
