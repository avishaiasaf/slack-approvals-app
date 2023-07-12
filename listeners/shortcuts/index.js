// const { messageNewTaskCallback } = require('./message-new-task');
// const { globalNewTaskCallback } = require('./global-new-task');

module.exports.register = (app) => {
    app.shortcut("message_new_task", () => {});
    app.shortcut("global_new_task", () => {});
};
