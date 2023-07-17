const { getDelegationApprovalModal } = require("../../user-interface/modals");

const getDelegationApprovalModalCallback = async ({ ack, payload, body, client, logger }) => {
    ack();

    await client.views.open({
        trigger_id: body.trigger_id,
        view: await getDelegationApprovalModal(),
    });
};

module.exports = { getDelegationApprovalModalCallback };
