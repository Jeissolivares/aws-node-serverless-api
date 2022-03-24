const buildDevLogger = require('./devLogger');
const buildProdLogger = require('./prodLogger');
let enviroment = process.env.NODE_ENV;
//let enviroment = process.env.devEnv;

let logger = null;

if (enviroment === "development") {
    logger = buildDevLogger();
}else{
    logger = buildProdLogger();
}

module.exports = logger;