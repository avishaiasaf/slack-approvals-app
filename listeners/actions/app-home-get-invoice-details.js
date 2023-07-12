const { Auth, OauthRequest, Enums } = require("../../utilities");
const { getInvoiceDetails } = require("../../user-interface/modals");

const getInvoiceDetailsCallback = async ({ ack, payload, body, client, logger }) => {
    console.log("get_invoice_details", "clicked", payload, body);
    ack();
    await OauthRequest(process.env.RESTLET_SCRIPT_ID, process.env.RESTLET_DEPLOY_ID, Auth, {
        action: "GET_INVOICE_DETAILS",
        value: 123,
    });

    await client.views.open({
        trigger_id: body.trigger_id,
        view: await getInvoiceDetails([{ id: "id-1", name: "pick invoice" }], "select vendor"),
    });
};

module.exports = { getInvoiceDetailsCallback };
