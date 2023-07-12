const { selectNetSuiteVendorCallback } = require("./select-vendor-from-netsuite");
const { Enums } = require("../../utilities");

module.exports.register = (app) => {
    app.options(Enums.APP_HOME.FIELDS.GET_VENDOR_DETAILS_OPTIONS, selectNetSuiteVendorCallback);
};
