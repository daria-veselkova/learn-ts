declare abstract class Logger {
    abstract log(message: string): void;
    printDate(date: Date): void;
}
declare class ServerLogger extends Logger {
    log(message: string): void;
    logWithDate(message: string): void;
}
declare const logger: ServerLogger;
//# sourceMappingURL=exercise_abs_class.d.ts.map