const { format, createLogger, transports } = require("winston");
const { combine, timestamp, printf } = format;

function buildDevLogger(){
    const logformat = printf(({ level, message, timestamp, stack }) => {
        return `${timestamp} ${level}: ${message} ${stack ? "\n" + stack : ""}`;
    });
    
    return createLogger({
        format: combine(
            format.colorize(),
            timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
            format.errors({ stack: true }),
            logformat
        ),
        transports: [new transports.Console()],
    });
};



module.exports = buildDevLogger;
