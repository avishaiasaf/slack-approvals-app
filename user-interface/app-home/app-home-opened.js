const { Md, HomeTab, Header, Divider, Section, Actions, Elements } = require("slack-block-builder");
const { Enums, HelperFunctions } = require("../../utilities");
const Buttons = Enums.APP_HOME.BUTTONS;
const header = require("../partials/app-home-nav-bar");
const approvalsNavBar = require("../partials/app-home-approval-nav-bar");

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
            ...header(Enums.TABS.APPROVAL_APP.value, username),
            ...approvalsNavBar(Buttons.GET_APPROVED.actionId)
        )
        .blocks(Header({ text: "Previously Approved Invoices" }), Divider())
        .blocks(...invoicesBlocks)
        .buildToJSON();
};
