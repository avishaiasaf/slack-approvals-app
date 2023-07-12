const { Md, HomeTab, Header, Divider, Section, Actions, Elements } = require("slack-block-builder");
const { Enums } = require("../../utilities");
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
            Divider()
        );
    });
    return HomeTab({
        callbackId: "tasks-home",
        privateMetaData: "completed",
    })
        .blocks(
            Section({ text: `Hi ${username}, what can I do for you today?` }),
            Actions({ blockId: "task-creation-actions" }).elements(
                Elements.Button({
                    text: Buttons.GET_PENDING_APPROVALS.text,
                })
                    .value(Buttons.GET_PENDING_APPROVALS.value)
                    .actionId(Buttons.GET_PENDING_APPROVALS.actionId),
                Elements.Button({
                    text: Buttons.SHOW_PENDING_APPROVALS.text,
                })
                    .value(Buttons.SHOW_PENDING_APPROVALS.value)
                    .actionId(Buttons.SHOW_PENDING_APPROVALS.actionId),
                Elements.Button({ text: Buttons.GET_VENDOR_DETAILS.text })
                    .value(Buttons.GET_VENDOR_DETAILS.value)
                    .actionId(Buttons.GET_VENDOR_DETAILS.actionId),
                Elements.Button({ text: Buttons.GET_INVOICE_DETAILS.text })
                    .value(Buttons.GET_INVOICE_DETAILS.value)
                    .actionId(Buttons.GET_INVOICE_DETAILS.actionId)
            )
        )
        .blocks(Header({ text: "Previously approved invoices" }), Divider())
        .blocks(...invoicesBlocks)
        .buildToJSON();
};
