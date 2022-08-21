"use strict";
class Logger {
    printDate(date) {
        this.log(date.toString());
    }
}
class ServerLogger extends Logger {
    log(message) {
        console.log(message);
    }
    logWithDate(message) {
        this.printDate(new Date());
        this.log(message);
    }
}
const logger = new ServerLogger();
logger.logWithDate('Message');
