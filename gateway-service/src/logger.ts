import pino, { levels } from "pino";


export function initGlobalLogger() {
    // const logger = pino({ level: "debug" });
    global.logger = console;
}


