const {
    Section,
    HomeTab,
    Blocks,
    Divider,
    Actions,
    Elements,
    Md,
    Button,
    Header,
} = require("slack-block-builder");
const { Enums, HelperFunctions } = require("../../utilities");
const Buttons = Enums.APP_HOME.BUTTONS;

module.exports = (username, approvedInvoices) => {
    invoicesBlocks = [];
    approvedInvoices.forEach((invoice) => {
        console.log(invoice);
        invoicesBlocks.push(
            Section({
                text: `${Md.bold(invoice.vendor)}: ${Md.link(
                    invoice.url,
                    invoice.name
                )} - ${Md.bold(invoice.amount)} ${Md.bold(invoice.currency)}`,
            }),
            // Blocks.Image().imageUrl(invoice.url).altText("Bill"),
            //Section.accessory(Elements.Button({ test: "test" }).actionId("test")).text("bla bla"),
            Actions({ blockId: "approve-invoice-" + invoice.name }).elements(
                Elements.Button({
                    text: "Approve",
                })
                    .value("approve-invoice-" + invoice.name)
                    .actionId("approve-invoice-" + invoice.name)
                    .primary(true),
                Elements.Button({
                    text: "Reject",
                })
                    .value("reject-invoice-" + invoice.name)
                    .actionId("reject-invoice-" + invoice.name)
            ),
            Divider()
        );
    });
    return HomeTab({
        callbackId: Enums.APP_HOME.PENDING_APPROVAL.CALLBACK_ID,
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
                    .actionId(Buttons.GET_INVOICE_DETAILS.actionId)
            )
        )
        .blocks(Header({ text: "Invoices Pending Your Approval" }), Divider())
        .blocks(...invoicesBlocks)
        .buildToJSON();
};
