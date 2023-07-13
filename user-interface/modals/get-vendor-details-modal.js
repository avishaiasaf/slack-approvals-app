const { Blocks, Elements, Modal } = require("slack-block-builder");
const { Enums } = require("../../utilities");
const Buttons = Enums.APP_HOME.BUTTONS;
const Fields = Enums.APP_HOME.FIELDS;

module.exports = Modal({
    title: "Get Vendor Details",
    submit: "Get Spend",
    callbackId: Enums.MODALS.GET_VENDOR_DEATILS_MODAL.callbackId,
})
    .blocks(
        Blocks.Section({ text: "Please select the vendor below:" }),
        Blocks.Divider(),
        Blocks.Input({ label: "Select Vendor" })
            .element(
                Elements.ExternalSelect()
                    .actionId(Fields.GET_VENDOR_DETAILS_OPTIONS)
                    .minQueryLength(3)
                    .placeholder("Choose vendor...")
                    .focusOnLoad(true)
            )
            .blockId("select-vendor")
    )
    .buildToJSON();
