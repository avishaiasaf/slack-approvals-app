const { OauthRequest, Auth, Enums } = require("../../utilities");
const modalEnums = Enums.MODALS.GET_DELEGATION_EMPLOYEES;

const getDelegationModalSubmitCallback = async ({ ack, body, logger, view }) => {
    const getObjectValue = (obj, i) => {
        return obj[Object.keys(obj)[i]];
    };
    console.log("body", view.state.values[modalEnums.INPUTS.DELEGATION_TO_EMPLOYEE]);
    console.log("body", view.state.values[modalEnums.INPUTS.DELEGATION_FROM_DATE]);
    const results = await OauthRequest(
        process.env.RESTLET_SCRIPT_ID,
        process.env.RESTLET_DEPLOY_ID,
        Auth,
        { action: "DELEGATE_TO_USER" }
    );

    await ack();
};

module.exports = { getDelegationModalSubmitCallback };
