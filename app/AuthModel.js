"use strict";
var AuthModel = (function () {
    function AuthModel(IsAuthentic, AuthToken) {
        if (IsAuthentic === void 0) { IsAuthentic = false; }
        if (AuthToken === void 0) { AuthToken = ""; }
        this.IsAuthentic = IsAuthentic;
        this.AuthToken = AuthToken;
        this.AuthTimeElapse = 20;
    }
    return AuthModel;
}());
exports.AuthModel = AuthModel;
//# sourceMappingURL=AuthModel.js.map