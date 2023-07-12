const { Blocks, Elements, Modal, Bits, Section, Header } = require("slack-block-builder");
const { Enums } = require("../../utilities");

module.exports = async (invoice) => {
    const results = [
        {
            name: "name",
            id: "id",
        },
    ];
    fieldsBlock = [];
    Object.entries(invoice).forEach((entry) => {
        fieldsBlock.push(Blocks.Section({ text: "" }).fields([entry[0], String(entry[1])]));
    });

    return Modal({
        title: "Get Invoice Details",
        submit: "Get Invoices",
        callbackId: "get_invoice_details",
    })
        .blocks(
            Blocks.Section({ text: "Select Vendor" }).accessory(
                Elements.ExternalSelect()
                    .actionId(Enums.APP_HOME.FIELDS.GET_VENDOR_DETAILS_OPTIONS)
                    .minQueryLength(3)
                    .placeholder("vendorPlaceholder")
                // .focusOnLoad(true)
            ),
            Blocks.Divider(),
            Blocks.Section({ text: "Vendor Recent Invoices" }).accessory(
                Elements.StaticSelect({
                    placeholder: "select invoice...",
                })
                    .actionId(Enums.APP_HOME.FIELDS.GET_INVOICE_DETAILS)
                    .options(
                        results.map((item) => Bits.Option({ text: item.name, value: item.id }))
                    )
            )
        )
        .blocks(Blocks.Divider(), Header({ text: "Invoice:" }), Blocks.Divider(), ...fieldsBlock)
        .buildToJSON();
};
