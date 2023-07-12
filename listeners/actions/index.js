const { getVendorDetailsCallback } = require("./app-home-get-vendor-details");
const { getPendignApprovalsCallback } = require("./app-home-get-pending-approvals");
const { getApprovalsCallback } = require("./app-home-get-approvals");
const { Enums } = require("../../utilities");

module.exports.register = (app) => {
    app.action(Enums.APP_HOME.BUTTONS.GET_VENDOR_DETAILS.value, getVendorDetailsCallback);
    app.action(Enums.APP_HOME.BUTTONS.GET_PENDING_APPROVALS.value, getPendignApprovalsCallback);
    app.action(Enums.APP_HOME.BUTTONS.GET_APPROVED.value, getApprovalsCallback);
    // app.action(
    //     { action_id: "app-home-nav-completed", type: "block_actions" },
    //     () => {}
    // );
    // app.action("app-home-nav-create-a-task", () => {});
};
