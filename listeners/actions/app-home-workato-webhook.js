const { HelperFunctions } = require("../../utilities");
const { HomeTab } = require("../../user-interface/app-home");

const getWorkatoWebhookCallback = async ({ ack, payload, body, client, logger, context }) => {
    try {
        await ack();
        console.log("workato webhook clicked", payload, body);
        const invoices = [{ name: "name", id: "id" }];
        const userName = "Workato" + HelperFunctions.titleizeUserName(body.user.name);
        const webhookBody = {
            event_type: "UPDATE_HOME",
            value: {
                view: HomeTab(userName, invoices),
                view_id: body.view.id,
                token: context.botToken,
            },
        };

        const headers = { "Content-Type": "application/json" };
        HelperFunctions.sendPostRequest(process.env.WORKATO_WEBHOOK, webhookBody, headers);
    } catch (e) {
        logger.info("error occurred", e);
    }
};

module.exports = { getWorkatoWebhookCallback };
