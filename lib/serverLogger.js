import pino from "pino";
import PinoPretty from "pino-pretty";
import { multistream } from "pino";

const prettyStream = new PinoPretty({
  colorize: true,
});

let streams;

if (process.env.NODE_ENV === "production") {
  streams = [{ stream: process.stdout }];
} else {
  streams = [
    { stream: prettyStream },
    { stream: pino.destination("server.log") },
  ];
}

const logger = pino(
  {
    level: process.env.NODE_ENV === "production" ? "info" : "debug",
    timestamp: pino.stdTimeFunctions.isoTime,
  },
  multistream(streams)
);

export const log = {
  info: (message) => logger.info(message),
  error: (message) => logger.error(message),
  debug: (message) => logger.debug(message),
  warn: (message) => logger.warn(message),
  trace: (message) => logger.trace(message),
  fatal: (message) => logger.fatal(message),
};

export default logger;
