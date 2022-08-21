abstract class Logger {
    abstract log(message: string): void;

    printDate(date: Date) {
        this.log(date.toString());
    }
}


class ServerLogger extends Logger {
    log(message: string) {
        console.log(message);
    }

    logWithDate(message: string) {
        this.printDate(new Date());
        this.log(message);
    }
}

const logger = new ServerLogger();
logger.logWithDate('Message');
