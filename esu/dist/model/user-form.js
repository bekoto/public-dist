"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserForm = void 0;
const crypto_1 = require("crypto");
const access_platform_1 = require("./access-platform");
class UserForm {
    constructor() {
        this.id = (0, crypto_1.randomUUID)();
        this.accessPlatform = access_platform_1.AccessPlatform.ALL;
    }
}
exports.UserForm = UserForm;
//# sourceMappingURL=user-form.js.map