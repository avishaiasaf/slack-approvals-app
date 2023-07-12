const { OauthRequest, Auth } = require("../../utilities");

const selectNetSuiteVendorCallback = async ({ ack, body }) => {
    try {
        console.log("Looking for", body.value);

        // Call the OauthRequest function to retrieve results
        const results = await OauthRequest(
            process.env.RESTLET_SCRIPT_ID,
            process.env.RESTLET_DEPLOY_ID,
            Auth,
            { action: "SELECTION", value: body.value }
        );

        // Prepare the options list
        const options = JSON.stringify(results);

        console.log("Results:", options);

        // Acknowledge the request with the options list
        await ack(JSON.parse(options));
    } catch (error) {
        console.error("Error:", error);
        await ack(); // Acknowledge the request to avoid leaving the menu hanging
    }
};

module.exports = { selectNetSuiteVendorCallback };
