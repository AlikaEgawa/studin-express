// const PORT = 3000;
const PORT = process.env.PORT || 3000;
const path = require("path");
const logger = require("./lib/log/logger.js");
const accesslogger = require("./lib/log/accesslogger.js");
const applicationlogger = require("./lib/log/applicationLogger.js");
const express = require("express");
const favicon = require("serve-favicon");
const app = express();

// Express settings
app.set("view engine", "ejs");
app.disable("x-powered-by");

// Static resource rooting
app.use(favicon(path.join(__dirname, "/public/favicon.ico")));
app.use("/public", express.static(path.join(__dirname, "/public")));

// Set access log.
app.use(accesslogger());

// Dynamic resource rooting.
app.use("/", require("./routes/index.js"));

// Set application log.
app.use(applicationlogger());

// Excecute web application.
app.listen(PORT, ()=>{
    logger.application.info(`\n========================================\n\nApplication listening at ${PORT}\n\nTry to access http://localhost:${PORT}\n\n========================================\n`);
});