enum StatusCode {
    SUCCESS = 200,
    IN_PROGRESS = 205,
    FAILED = 400
}

const response = {
    message: 'Payment succeed',
    statusCode: StatusCode.SUCCESS 
};

if (response.statusCode === StatusCode.SUCCESS) {
    console.log('Ok')
}

function action(status: StatusCode) {
    console.log(status)
}

action(StatusCode.SUCCESS);
action(200);
