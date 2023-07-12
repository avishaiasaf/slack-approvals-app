const { OauthRequest, Auth, createBarChart, Enums } = require("../../utilities");
const { vendorBillsChartModal } = require("../../user-interface/modals");

const getVendorBillsChartCallback = async ({ ack, body, logger, view }) => {
    const getObjectValue = (obj, i) => {
        return obj[Object.keys(obj)[i]];
    };

    const vendorId = getObjectValue(view.state.values, 0)[
        Enums.APP_HOME.FIELDS.GET_VENDOR_DETAILS_OPTIONS
    ].selected_option.value;

    const results = await OauthRequest(
        process.env.RESTLET_SCRIPT_ID,
        process.env.RESTLET_DEPLOY_ID,
        Auth,
        { action: "VENDOR_BILLS", value: vendorId }
    );

    const chartUrl = await createBarChart(results);
    const modal = await vendorBillsChartModal(chartUrl, String(vendorId));

    await ack({
        response_action: "push",
        view: modal,
    });
};

module.exports = { getVendorBillsChartCallback };
