const { getVendorDetailsCallback } = require("./app-home-get-vendor-details");
const { getPendignApprovalsCallback } = require("./app-home-get-pending-approvals");
const { getApprovalsCallback } = require("./app-home-get-approvals");
const { getInvoiceDetailsCallback } = require("./app-home-get-invoice-details");
const { getInvoiceDetailsOptionsCallback } = require("./get-invoice-deails-vendor-picked");
const { getInvoiceDetailsShowFieldsCallback } = require("./get-invoice-details-show-fields");
const { getWorkatoWebhookCallback } = require("./app-home-workato-webhook");
const { getAnotherAppCallback } = require("./app-home-another-app-tab");
const { getDelegationApprovalModalCallback } = require("./app-home-approval-delegation");
const { Enums } = require("../../utilities");

module.exports.register = (app) => {
    app.action(Enums.APP_HOME.BUTTONS.GET_VENDOR_DETAILS.value, getVendorDetailsCallback);
    app.action(Enums.APP_HOME.BUTTONS.GET_PENDING_APPROVALS.value, getPendignApprovalsCallback);
    app.action(Enums.APP_HOME.BUTTONS.GET_APPROVED.value, getApprovalsCallback);
    app.action(Enums.APP_HOME.BUTTONS.GET_INVOICE_DETAILS.value, getInvoiceDetailsCallback);
    app.action(Enums.APP_HOME.FIELDS.GET_VENDOR_DETAILS_OPTIONS, getInvoiceDetailsOptionsCallback);
    app.action(Enums.APP_HOME.FIELDS.GET_INVOICE_DETAILS, getInvoiceDetailsShowFieldsCallback);
    app.action(Enums.APP_HOME.BUTTONS.WORKATO_WEBHOOK.value, getWorkatoWebhookCallback);
    app.action(Enums.TABS.APPROVAL_APP.value, getPendignApprovalsCallback);
    app.action(Enums.TABS.ANOTHER_APP.value, getAnotherAppCallback);
    app.action(Enums.APP_HOME.BUTTONS.DELEGATE_APPROVAL.value, getDelegationApprovalModalCallback);
    // app.action(
    //     { action_id: "app-home-nav-completed", type: "block_actions" },
    //     () => {}
    // );
};
