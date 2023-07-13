const { Auth, OauthRequest, Enums } = require("../../utilities");
const { getInvoiceDetailsInvoice } = require("../../user-interface/modals");

const getInvoiceDetailsShowFieldsCallback = async ({ ack, payload, body, client, logger }) => {
    console.log("action get_invoice_details", "clicked", payload, body);
    ack();
    const invoice = payload.selected_option.value;
    console.log("invoice", invoice);
    const response = await OauthRequest(
        process.env.RESTLET_SCRIPT_ID,
        process.env.RESTLET_DEPLOY_ID,
        Auth,
        {
            action: "GET_INVOICE",
            value: invoice,
        }
    );

    await client.views.push({
        user_id: body.user.id,
        view: await getInvoiceDetailsInvoice(response[0]),
        view_id: body.view.id,
        trigger_id: body.trigger_id,
    });
};

module.exports = { getInvoiceDetailsShowFieldsCallback };
