"use strict";
var SaveAlertGuard = (function () {
    function SaveAlertGuard() {
    }
    SaveAlertGuard.prototype.canDeactivate = function (target) {
        if (!target.isSaved()) {
            return window.confirm('Do you really want to cancel?');
        }
        return true;
    };
    return SaveAlertGuard;
}());
exports.SaveAlertGuard = SaveAlertGuard;
//# sourceMappingURL=cart.guards.js.map