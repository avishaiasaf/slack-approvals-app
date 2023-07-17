const { selectNetSuiteVendorCallback } = require("./select-vendor-from-netsuite");
const { selectNetSuiteEmployeeCallback } = require("./select-employees-from-netsuite");
const { Enums } = require("../../utilities");

module.exports.register = (app) => {
    app.options(Enums.APP_HOME.FIELDS.GET_VENDOR_DETAILS_OPTIONS, selectNetSuiteVendorCallback);
    app.options(Enums.APP_HOME.FIELDS.GET_DELEGATION_EMPLOYEES, selectNetSuiteEmployeeCallback);
};
