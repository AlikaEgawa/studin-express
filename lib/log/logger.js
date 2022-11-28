const log4js = require("log4js");
const config = require("../../config/log4js.config");
var console, application, access;

log4js.configure(config);

// Console logger.
console = log4js.getLogger();

// Application logger
application = log4js.getLogger("application");

// Access Logger
access = log4js.getLogger("access");

module.exports = {
    console,
    application,
    access
};