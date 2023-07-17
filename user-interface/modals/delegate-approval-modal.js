const { Blocks, Elements, Modal, Bits, Section } = require("slack-block-builder");
const { Enums } = require("../../utilities");
const Fields = Enums.APP_HOME.FIELDS;

module.exports = async () => {
    return Modal({
        title: "Approval Delegation",
        submit: "Delegate",
        callbackId: Enums.MODALS.GET_DELEGATION_EMPLOYEES.callbackId,
    })
        .blocks(
            Blocks.Section({ text: "Approval Delegation" }),
            Blocks.Divider(),
            Blocks.Input({ label: "Delegate Approvals To" })
                .element(
                    Elements.ExternalSelect()
                        .actionId(Fields.GET_DELEGATION_EMPLOYEES)
                        .minQueryLength(3)
                        .placeholder("Choose delegation to...")
                        .focusOnLoad(true)
                )
                .blockId(Enums.MODALS.GET_DELEGATION_EMPLOYEES.INPUTS.DELEGATION_TO_EMPLOYEE),
            Blocks.Divider(),
            Blocks.Input({ label: "From Date" })
                .element(Elements.DatePicker())
                .blockId(Enums.MODALS.GET_DELEGATION_EMPLOYEES.INPUTS.DELEGATION_FROM_DATE),
            Blocks.Divider(),
            Blocks.Input({ label: "To Date" })
                .element(Elements.DatePicker())
                .blockId(Enums.MODALS.GET_DELEGATION_EMPLOYEES.INPUTS.DELEGATION_TO_DATE)
        )
        .buildToJSON();
};
