import { Taxe } from "src/entity/taxe";
export declare class SyncDto {
    syncAt: number;
    items: Taxe[];
    countItem: number;
    device: string;
}
