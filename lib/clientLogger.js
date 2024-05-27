import pino from 'pino';

const logger = pino({
  browser: {
    asObject: true,
    transmit: {
      level: 'info',
      send: (level, logEvent) => {
        const msg = logEvent.messages[0];
        fetch('/api/log', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ level, msg }),
        });
      },
    },
  },
});

export const log = {
  info: (message) => logger.info(message),
  error: (message) => logger.error(message),
  debug: (message) => logger.debug(message),
  warn: (message) => logger.warn(message),
  trace: (message) => logger.trace(message),
  fatal: (message) => logger.fatal(message),
};

export default logger;
