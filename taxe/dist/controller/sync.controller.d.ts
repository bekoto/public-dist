import { AppService } from 'src/app.service';
import { SyncAdapter } from 'src/dto/sync-adapter';
import { TaxeDto } from 'src/dto/taxe-dto';
export declare class SyncController {
    private appServ;
    constructor(appServ: AppService);
    syncTaxesParking(data: SyncAdapter<TaxeDto[]>): Promise<SyncAdapter<import("../entity/taxe").Taxe[]>>;
}
