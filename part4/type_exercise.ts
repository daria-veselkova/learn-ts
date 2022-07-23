interface IPayment {
    sum: number,
    from: number,
    to: number
}

enum PaymentStatus {
    SUCCESS = 'success',
    FAILED = 'failed'
}

interface IPaymentsRequest extends IPayment { }

interface IDataSuccess extends IPayment {
    databaseId: number
}

interface IDataFailed {
    errorMessage: string,
    errorCode: number
}

interface IResponseSucces {
    paymentStatus: PaymentStatus.SUCCESS,
    data: IDataSuccess
}

interface IResponseFailed {
    paymentStatus: PaymentStatus.FAILED,
    data: IDataFailed
}

type typeGuard = (response: IResponseSucces | IResponseFailed) => number;

type Resp = IResponseSucces | IResponseFailed;

function isSuccess(response: Resp): response is IResponseSucces {
    if (response.paymentStatus === PaymentStatus.SUCCESS) {
        return true;
    }
    return false;
}

function getIdFromData(response: Resp): number {
    if (isSuccess(response)) {
        return response.data.databaseId;
    } else {
        throw new Error(response.data.errorMessage);
    }
}