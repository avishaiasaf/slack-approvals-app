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
const header = require("../partials/app-home-nav-bar");
const approvalsNavBar = require("../partials/app-home-approval-nav-bar");

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
                    text: "👍🏻 Approve",
                })
                    .value("approve-invoice-" + invoice.name)
                    .actionId("approve-invoice-" + invoice.name)
                    .primary(true),
                Elements.Button({
                    text: "👎🏻 Reject",
                })
                    .value("reject-invoice-" + invoice.name)
                    .actionId("reject-invoice-" + invoice.name)
                    .danger(true)
            ),
            Divider()
        );
    });
    return HomeTab({
        callbackId: Enums.APP_HOME.PENDING_APPROVAL.CALLBACK_ID,
        privateMetaData: "completed",
    })
        .blocks(
            ...header(Enums.TABS.APPROVAL_APP.value, username),
            ...approvalsNavBar(Buttons.GET_PENDING_APPROVALS.actionId)
        )
        .blocks(Header({ text: "Invoices Pending Your Approval" }), Divider())
        .blocks(...invoicesBlocks)
        .buildToJSON();
};
