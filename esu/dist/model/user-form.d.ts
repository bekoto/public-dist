import { AccessPlatform } from "./access-platform";
export declare class UserForm {
    id: string;
    username: string;
    phone: string;
    email: string;
    password: string;
    repassword: string;
    oldpassword: string;
    nom: string;
    app: string;
    isAllowed: boolean;
    pwdHasChanged: boolean;
    createdAt: Date;
    modifiedAt: Date;
    createdBy: string;
    category: string;
    accessPlatform: AccessPlatform;
}
