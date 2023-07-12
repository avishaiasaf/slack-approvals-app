const { HomeTab } = require("../../user-interface/app-home");
const { Auth, OauthRequest, slackHelperFunctions } = require("../../utilities");

const getApprovalsCallback = async ({ ack, payload, body, client }) => {
    console.log("get_pending_approvals", "payload", payload, "body", body);
    ack();
    const userEmail = await slackHelperFunctions(body.user.id, client);
    const response = await OauthRequest(
        process.env.RESTLET_SCRIPT_ID,
        process.env.RESTLET_DEPLOY_ID,
        Auth,
        { action: "GET_APPROVED", value: userEmail }
    );

    await client.views.update({
        user_id: body.user.id,
        view: HomeTab(body.user.name, response.invoices),
        view_id: body.view.id,
    });
};

module.exports = { getApprovalsCallback };
