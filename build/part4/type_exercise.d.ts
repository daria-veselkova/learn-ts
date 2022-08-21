interface IPayment {
    sum: number;
    from: number;
    to: number;
}
declare enum PaymentStatus {
    SUCCESS = "success",
    FAILED = "failed"
}
interface IPaymentsRequest extends IPayment {
}
interface IDataSuccess extends IPayment {
    databaseId: number;
}
interface IDataFailed {
    errorMessage: string;
    errorCode: number;
}
interface IResponseSucces {
    paymentStatus: PaymentStatus.SUCCESS;
    data: IDataSuccess;
}
interface IResponseFailed {
    paymentStatus: PaymentStatus.FAILED;
    data: IDataFailed;
}
declare type typeGuard = (response: IResponseSucces | IResponseFailed) => number;
declare type Resp = IResponseSucces | IResponseFailed;
declare function isSuccess(response: Resp): response is IResponseSucces;
declare function getIdFromData(response: Resp): number;
//# sourceMappingURL=type_exercise.d.ts.map