require("dotenv").config();

const { App, LogLevel } = require("@slack/bolt");

const { registerListeners } = require("./listeners");

let logLevel;
switch (process.env.LOG_LEVEL) {
    case "debug":
        logLevel = LogLevel.DEBUG;
        break;
    case "info":
        logLevel = LogLevel.INFO;
        break;
    case "warn":
        logLevel = LogLevel.WARN;
        break;
    case "error":
        logLevel = LogLevel.ERROR;
        break;
    default:
        logLevel = LogLevel.INFO;
}

// Initializes your app with your bot token and signing secret
const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    socketMode: true,
    appToken: process.env.SLACK_APP_TOKEN,
    logLevel,
});
registerListeners(app);

app.use(async ({ logger, context, next }) => {
    logger.info("middleware method", context);
    await next();
});

(async () => {
    try {
        await app.start(process.env.PORT || 3000);

        console.log("⚡️ Tasks app is running!");
    } catch (error) {
        console.error("Unable to start App", error);
        process.exit(1);
    }
})();
