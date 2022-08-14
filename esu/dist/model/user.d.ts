import { AccessPlatform } from "./access-platform";
export declare class User {
    _id: any;
    id: any;
    username: string;
    type: string;
    phone: string;
    email: string;
    password: string;
    repassword: string;
    nom: string;
    prenom: string;
    isAllowed: boolean;
    hasPasswordSet: boolean;
    code: string;
    createdAt: Date;
    createdBy: User;
    application: any;
    profile: File;
    pin: string;
    accessPlatform: AccessPlatform;
    modifiedBy: User;
    modifiedAt: Date;
    other: String;
    category: any;
    roles: any[];
}
