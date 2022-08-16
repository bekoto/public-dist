import { SyncDevice } from "src/entity/sync-device";
export interface SyncAdapter<T> {
    syncInfo: SyncDevice;
    datas: T;
}
