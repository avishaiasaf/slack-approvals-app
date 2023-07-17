const { getVendorBillsChartCallback } = require("./get-vendor-bills-chart");
const { getDelegationModalSubmitCallback } = require("./approval-delegation-modal-submit");
const { Enums } = require("../../utilities");

module.exports.register = (app) => {
    app.view(Enums.MODALS.GET_VENDOR_DEATILS_MODAL.callbackId, getVendorBillsChartCallback);
    app.view(Enums.MODALS.GET_DELEGATION_EMPLOYEES.callbackId, getDelegationModalSubmitCallback);
};
