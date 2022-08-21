declare enum StatusCode {
    SUCCESS = 200,
    IN_PROGRESS = 205,
    FAILED = 400
}
declare const response: {
    message: string;
    statusCode: StatusCode;
};
declare function action(status: StatusCode): void;
//# sourceMappingURL=enums.d.ts.map