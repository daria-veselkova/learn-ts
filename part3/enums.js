"use strict";
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 200] = "SUCCESS";
    StatusCode[StatusCode["IN_PROGRESS"] = 205] = "IN_PROGRESS";
    StatusCode[StatusCode["FAILED"] = 400] = "FAILED";
})(StatusCode || (StatusCode = {}));
const response = {
    message: 'Payment succeed',
    statusCode: StatusCode.SUCCESS
};
if (response.statusCode === StatusCode.SUCCESS) {
    console.log('Ok');
}
function action(status) {
    console.log(status);
}
action(StatusCode.SUCCESS);
action(200);
