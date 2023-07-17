const { Section, Actions, Elements, Header } = require("slack-block-builder");
const { Enums, HelperFunctions } = require("../../utilities");
const Buttons = Enums.APP_HOME.BUTTONS;

const approvalsNavBar = (currentTab) => {
    return [
        Header({
            text: `Approval Dashboard`,
        }),
        Actions({ blockId: "task-creation-actions" }).elements(
            Elements.Button({
                text: Buttons.GET_PENDING_APPROVALS.text,
            })
                .value(Buttons.GET_PENDING_APPROVALS.value)
                .actionId(Buttons.GET_PENDING_APPROVALS.actionId)
                .primary(Buttons.GET_PENDING_APPROVALS.value === currentTab),
            Elements.Button({
                text: Buttons.GET_APPROVED.text,
            })
                .value(Buttons.GET_APPROVED.value)
                .actionId(Buttons.GET_APPROVED.actionId)
                .primary(Buttons.GET_APPROVED.value === currentTab),
            Elements.Button({ text: Buttons.GET_VENDOR_DETAILS.text })
                .value(Buttons.GET_VENDOR_DETAILS.value)
                .actionId(Buttons.GET_VENDOR_DETAILS.actionId),
            Elements.Button({ text: Buttons.GET_INVOICE_DETAILS.text })
                .value(Buttons.GET_INVOICE_DETAILS.value)
                .actionId(Buttons.GET_INVOICE_DETAILS.actionId),
            Elements.Button({ text: Buttons.DELEGATE_APPROVAL.text })
                .value(Buttons.DELEGATE_APPROVAL.value)
                .actionId(Buttons.DELEGATE_APPROVAL.actionId),
            Elements.Button({ text: Buttons.WORKATO_WEBHOOK.text })
                .value(Buttons.WORKATO_WEBHOOK.value)
                .actionId(Buttons.WORKATO_WEBHOOK.actionId)
        ),
    ];
};

module.exports = approvalsNavBar;
