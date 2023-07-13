const { Md, HomeTab, Header, Divider, Section, Actions, Elements } = require("slack-block-builder");
const { Enums, HelperFunctions } = require("../../utilities");
const Buttons = Enums.APP_HOME.BUTTONS;

module.exports = (username, approvedInvoices) => {
    invoicesBlocks = [];
    console.log(typeof approvedInvoices);
    if (typeof approvedInvoices === "object") {
        approvedInvoices.forEach((invoice) => {
            console.log(invoice);
            invoicesBlocks.push(
                Section({
                    text: `${Md.bold(invoice.vendor)}: ${Md.link(
                        invoice.url,
                        invoice.name
                    )} - ${Md.bold(invoice.amount)} ${Md.bold(invoice.currency)}`,
                }),
                Divider()
            );
        });
    }

    return HomeTab({
        callbackId: Enums.APP_HOME.APPROVED.CALLBACK_ID,
        privateMetaData: "completed",
    })
        .blocks(
            Section({
                text: `Hi ${HelperFunctions.titleizeUserName(
                    username
                )}, what can I do for you today?`,
            }),
            Actions({ blockId: "task-creation-actions" }).elements(
                Elements.Button({
                    text: Buttons.GET_PENDING_APPROVALS.text,
                })
                    .value(Buttons.GET_PENDING_APPROVALS.value)
                    .actionId(Buttons.GET_PENDING_APPROVALS.actionId),
                Elements.Button({
                    text: Buttons.GET_APPROVED.text,
                })
                    .value(Buttons.GET_APPROVED.value)
                    .actionId(Buttons.GET_APPROVED.actionId),
                Elements.Button({ text: Buttons.GET_VENDOR_DETAILS.text })
                    .value(Buttons.GET_VENDOR_DETAILS.value)
                    .actionId(Buttons.GET_VENDOR_DETAILS.actionId),
                Elements.Button({ text: Buttons.GET_INVOICE_DETAILS.text })
                    .value(Buttons.GET_INVOICE_DETAILS.value)
                    .actionId(Buttons.GET_INVOICE_DETAILS.actionId),
                Elements.Button({ text: Buttons.WORKATO_WEBHOOK.text })
                    .value(Buttons.WORKATO_WEBHOOK.value)
                    .actionId(Buttons.WORKATO_WEBHOOK.actionId)
            )
        )
        .blocks(Header({ text: "Previously Approved Invoices" }), Divider())
        .blocks(...invoicesBlocks)
        .buildToJSON();
};
