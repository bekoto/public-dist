"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor() {
        this.isAllowed = false;
        this.hasPasswordSet = false;
        this.createdAt = new Date();
        this.roles = [];
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map