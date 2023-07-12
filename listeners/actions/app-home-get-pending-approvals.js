const { HomeTabApproved } = require("../../user-interface/app-home");
const { Auth, OauthRequest, slackHelperFunctions, Enums } = require("../../utilities");

const getPendignApprovalsCallback = async ({ ack, payload, body, client }) => {
    console.log("get_pending_approvals", "payload", payload, "body", body);
    ack();
    if (Enums.APP_HOME.PENDING_APPROVAL.CALLBACK_ID !== body.view.callback_id) {
        const userEmail = await slackHelperFunctions(body.user.id, client);
        const response = await OauthRequest(
            process.env.RESTLET_SCRIPT_ID,
            process.env.RESTLET_DEPLOY_ID,
            Auth,
            { action: "GET_PENDING_APPROVALS", value: userEmail }
        );

        await client.views.update({
            user_id: body.user.id,
            view: HomeTabApproved(body.user.name, response.invoices),
            view_id: body.view.id,
        });
    }
};

module.exports = { getPendignApprovalsCallback };
