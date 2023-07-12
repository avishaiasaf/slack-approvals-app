const { getVendorDetails } = require("../../user-interface/modals");
const getVendorDetailsCallback = async ({ ack, payload, body, client, logger }) => {
    try {
        await ack();
        console.log("get_vendor_details clicked", payload, body);
        const result = await client.views.open({
            trigger_id: body.trigger_id,
            view: getVendorDetails,
        });
        logger.info(result);
    } catch (e) {
        logger.info("error occurred", e);
    }
};

module.exports = {
    getVendorDetailsCallback,
};
