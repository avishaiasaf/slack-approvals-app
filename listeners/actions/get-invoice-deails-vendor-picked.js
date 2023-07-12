const { Auth, OauthRequest, Enums } = require("../../utilities");
const { getInvoiceDetails } = require("../../user-interface/modals");

const getInvoiceDetailsOptionsCallback = async ({ ack, payload, body, client, logger }) => {
    console.log("action get_invoice_details", "clicked", payload, body);
    ack();
    const response = await OauthRequest(
        process.env.RESTLET_SCRIPT_ID,
        process.env.RESTLET_DEPLOY_ID,
        Auth,
        {
            action: "VENDOR_BILLS",
            value: payload.selected_option.value,
        }
    );

    await client.views.update({
        user_id: body.user.id,
        view: await getInvoiceDetails(response, payload.selected_option.text.text),
        view_id: body.view.id,
    });
};

module.exports = { getInvoiceDetailsOptionsCallback };
