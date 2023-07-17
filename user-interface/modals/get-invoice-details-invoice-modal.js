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
        fieldsBlock.push(Blocks.Section({ text: "" }).fields([`*${entry[0]}*`, String(entry[1])]));
    });

    return Modal({
        title: "Get Invoice Details",
        callbackId: "get_invoice_details",
    })
        .blocks(Blocks.Divider(), Header({ text: "Invoice:" }), Blocks.Divider(), ...fieldsBlock)
        .buildToJSON();
};
