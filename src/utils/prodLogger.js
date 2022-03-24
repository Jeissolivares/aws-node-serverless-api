const { format, createLogger, transports } = require("winston");
const { combine, timestamp, json } = format;

function buildProdLogger(){
    return createLogger({
        format: combine(
            format.colorize(),
            timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
            format.errors({ stack: true }),
            json()
        ),
        transports: [new transports.File({
            maxsize: 1200000,
            maxFiles: 5,
            filename: `${__dirname}/logs/logs.log`,
        })],
    });
};



module.exports = buildProdLogger;
