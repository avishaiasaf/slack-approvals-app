const { HomeTab } = require("../../user-interface/app-home");

const appHomeOpenedCallback = async ({ event, client, logger }) => {
    try {
        const userData = await client.users.info({
            user: event.user,
        });
        const userEmail = userData.user.email;
        const userName = userData.user.real_name;
        const invoices = [{ name: "name", id: "id" }];
        console.log("userEmail", userName, HomeTab(userName));

        // Call views.publish with the built-in client
        const result = await client.views.publish({
            user_id: event.user,
            view: HomeTab(userName, invoices),
        });
        logger.info(result);
    } catch (error) {
        logger.error(error);
    }
};
module.exports = { appHomeOpenedCallback };
