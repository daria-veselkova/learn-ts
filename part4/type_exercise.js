"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["SUCCESS"] = "success";
    PaymentStatus["FAILED"] = "failed";
})(PaymentStatus || (PaymentStatus = {}));
function isSuccess(response) {
    if (response.paymentStatus === PaymentStatus.SUCCESS) {
        return true;
    }
    return false;
}
function getIdFromData(response) {
    if (isSuccess(response)) {
        return response.data.databaseId;
    }
    else {
        throw new Error(response.data.errorMessage);
    }
}
