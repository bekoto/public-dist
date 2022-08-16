"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserForm = void 0;
const mongoose_1 = require("mongoose");
const user_1 = require("../entity/user");
const access_platform_1 = require("../model/access-platform");
class UserForm {
    constructor() {
        this.accessPlatform = access_platform_1.AccessPlatform.ALL;
    }
    toEntity() {
        let u = new user_1.User();
        u.nom = this.nom;
        u.id = new mongoose_1.default.Types.ObjectId(this.id);
        u.username = this.username;
        u.phone = this.phone;
        u.password = this.password;
        u.repassword = this.repassword;
        u.code = this.category;
        u.accessPlatform = this.accessPlatform;
        u.createdAt = this.createdAt;
        u.hasPasswordSet = this.pwdHasChanged;
        return u;
    }
}
exports.UserForm = UserForm;
//# sourceMappingURL=user-form.js.map