const { HomeAnotherApp } = require("../../user-interface/app-home");

const getAnotherAppCallback = async ({ ack, payload, body, client }) => {
    console.log("get_pending_approvals", "payload", payload, "body", body);
    ack();

    await client.views.update({
        user_id: body.user.id,
        view: HomeAnotherApp(body.user.name),
        view_id: body.view.id,
    });
};

module.exports = { getAnotherAppCallback };
