const shortcutsListener = require("./shortcuts");
const viewsListener = require("./views");
const eventsListener = require("./events");
const actionsListener = require("./actions");
const optionsListener = require("./options");

module.exports.registerListeners = (app) => {
    shortcutsListener.register(app);
    viewsListener.register(app);
    eventsListener.register(app);
    actionsListener.register(app);
    optionsListener.register(app);
};
